# Guía de inicio con Laravel

El adaptador oficial conecta Laravel Storage, Gates y eventos con el selector independiente de KCFinder.

## Requisitos

- PHP 8.2 o superior.
- Laravel 12 o 13.
- KCFinder 4.9 o superior.

## 1. Instalar el adaptador

```bash
composer require krma-cl/kcfinder-laravel:^1.4.1
php artisan vendor:publish --tag=kcfinder-config
```

## 2. Configurar almacenamiento

```dotenv
KCFINDER_DISK=public
KCFINDER_URL_PREFIX=/storage
KCFINDER_BROWSER_URL=/kcfinder/browse.php
```

El valor de `KCFINDER_BROWSER_URL` apunta al puente HTTP optativo. No conviertas
todo `vendor` en una raíz pública.

## 3. Autorizar selecciones

```php
use Illuminate\Support\Facades\Gate;

Gate::define('kcfinder.select', static function ($user, string $operation, string $path): bool {
    return $user->can('manage-files');
});
```

## 4. Obtener el descriptor JSON

```php
use Krma\KCFinder\Laravel\KCFinderManager;

$file = app(KCFinderManager::class)->select('/01-actos/DO-20130614.pdf');

return response()->json($file);
```

El resultado contiene `name`, `path`, `url`, `mime` y `size`. Después de una selección autorizada se emite `FileSelected`.

## 5. Separar vistas previas y URLs finales

Una aplicación puede mostrar archivos mediante una ruta autenticada y devolver otra URL al seleccionar. También puede utilizar URLs temporales de S3:

```dotenv
KCFINDER_SELECTED_URL_PREFIX=/storage/transparencia
KCFINDER_PREVIEW_URL_PREFIX=/internal/kcfinder/preview
KCFINDER_PREVIEW_URL_TTL=300
```

```php
use Krma\KCFinder\Laravel\Facades\KCFinder;

$preview = KCFinder::previewUrl('/imagenes/foto.jpg');
$selected = KCFinder::selectedUrl('/imagenes/foto.jpg');
```

Para estrategias propias, implementa y registra `PreviewUrlResolverInterface` y `SelectedUrlResolverInterface`. El Gate autoriza la operación `preview` antes de invocar el resolvedor.

## 6. Respuestas estructuradas y eventos

Desde la versión 1.1, el adaptador puede responder JSON consistente y emitir eventos después de cada operación:

```php
$result = KCFinder::reportUploaded('/imagenes/foto.jpg');

return response()->json($result, $result->httpStatus());
```

```json
{
  "success": true,
  "operation": "upload",
  "files": [
    {
      "name": "foto.jpg",
      "path": "/imagenes/foto.jpg",
      "url": "/storage/transparencia/imagenes/foto.jpg",
      "mime": "image/jpeg",
      "size": 145408
    }
  ],
  "warnings": [],
  "meta": { "version": 1 }
}
```

Los eventos disponibles son `FileUploaded`, `FileEdited`, `FileCopied`,
`FileMoved`, `FileRenamed`, `FileDeleted`, `DirectoryCreated`,
`DirectoryRenamed` y `DirectoryDeleted`. Los eventos de archivo incluyen
metadatos, checksum SHA-256 y usuario autenticado; copiar, mover y renombrar
incluyen las rutas anterior y nueva.

Para eliminar, mover o renombrar, captura el estado antes de modificar el almacenamiento:

```php
$before = KCFinder::snapshot('/imagenes/nombre-anterior.jpg', 'rename');

// Ejecuta la operación existente de KCFinder.

$result = KCFinder::reportRenamed($before, '/imagenes/nombre-nuevo.jpg');
return response()->json($result, $result->httpStatus());
```

Esto permite sincronizar catálogos y auditorías por evento sin volver a recorrer todos los archivos.

::: warning Compatibilidad
El formato estructurado es optativo y no altera las respuestas históricas ni el JavaScript del navegador. Los métodos `report*` siguen disponibles para endpoints JSON propios.
:::

## 7. Habilitar el navegador clásico autenticado

El adaptador 1.4.1 incorpora un puente HTTP oficial desactivado de forma
predeterminada. En `config/kcfinder.php`:

```php
'http' => [
    'enabled' => true,
    'prefix' => 'kcfinder',
    'middleware' => ['web', 'auth', 'can:manage-files'],
    // conserva aquí session, headers y runtime publicados por el paquete
],
```

```dotenv
KCFINDER_HTTP_ENABLED=true
KCFINDER_SESSION_PATH=/ruta/escribible/kcfinder-sessions
KCFINDER_UPLOAD_URL=/storage
```

La interfaz queda en `/kcfinder/browse.php`. El puente autoriza mediante Gate,
inicia una sesión nativa aislada, sincroniza el CSRF desde la primera petición,
inyecta el observador oficial y aplica cabeceras configurables de CSP,
`nosniff` y referrer policy.

La versión 1.4.1 sirve `js/index.php`, `css/index.php` y los dos bundles del
tema sin ejecutar los minificadores PHP heredados dentro del proceso Laravel.
También proporciona temporalmente `SCRIPT_FILENAME`, `HTTP_HOST` y `HTTPS` a
los entrypoints funcionales y restaura sus valores al terminar. Esto evita que
un bundle cacheado finalice prematuramente la respuesta Laravel.

::: warning Almacenamiento local
El navegador clásico edita imágenes y archivos mediante rutas físicas. Este
puente HTTP requiere un disco local de Laravel. Los descriptores y resolvedores
de URL sí pueden continuar usando S3 u otros discos remotos.
:::

El observador cubre:

- cargas normales, múltiples y mediante arrastre;
- edición y recorte de imágenes;
- copia, movimiento, renombrado y eliminación;
- creación, renombrado y eliminación recursiva de carpetas;
- operaciones masivas, con un evento por archivo exitoso.

Mover, renombrar y eliminar capturan el snapshot autorizado antes de modificar el almacenamiento. Si un listener secundario falla, KCFinder registra el error, pero no responde falsamente que la operación principal fracasó.

::: warning Evita eventos duplicados
Cuando el puente automático esté habilitado, no llames además a `reportUploaded()`, `reportRenamed()` u otro método `report*` para la misma operación.
:::

No edites `vendor`, no inicialices Laravel por segunda vez desde
`config.local.php` y no agregues manualmente el observador cuando uses este
puente.

## 8. Publicar recursos y el tema

```bash
composer require krma-cl/kcfinder-bootstrap5-theme:^0.3.1
php artisan kcfinder:install-assets
php artisan kcfinder:clear-cache
```

El adaptador detecta el tema Composer y lo sirve mediante la misma ruta
autenticada del navegador clásico. El comando Artisan publica únicamente los
recursos web propios del puente y genera un manifiesto con las versiones del
núcleo y del tema; no copia scripts PHP a la raíz pública ni modifica
`vendor`.

Desde 1.4.1 el comando también genera bundles estáticos bajo `bundles/`. Después
de actualizar desde 1.4.0, vuelve a publicarlos:

```bash
composer require krma-cl/kcfinder-laravel:^1.4.1
php artisan kcfinder:install-assets --force
php artisan kcfinder:clear-cache
```

::: tip Seguridad
El Gate se evalúa antes de resolver metadatos del archivo. Mantén la autorización en el servidor aunque la interfaz oculte operaciones.
:::

[Repositorio y referencia del adaptador →](https://github.com/krma-cl/kcfinder-laravel)
