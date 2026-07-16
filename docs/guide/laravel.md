# Guía de inicio con Laravel

El adaptador oficial conecta Laravel Storage, Gates y eventos con el selector independiente de KCFinder.

## Requisitos

- PHP 8.2 o superior.
- Laravel 12 o 13.
- Navegador KCFinder desplegado mediante una publicación web controlada.

## 1. Instalar el adaptador

```bash
composer require krma-cl/kcfinder-laravel:^1.1
php artisan vendor:publish --tag=kcfinder-config
```

## 2. Configurar almacenamiento

```dotenv
KCFINDER_DISK=public
KCFINDER_URL_PREFIX=/storage
KCFINDER_BROWSER_URL=/vendor/kcfinder/browse.php
```

El valor de `KCFINDER_BROWSER_URL` debe apuntar a tu publicación controlada del navegador; no conviertas todo `vendor` en una raíz pública.

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

Los eventos disponibles son `FileUploaded`, `FileEdited`, `FileMoved`, `FileRenamed`, `FileDeleted` y `DirectoryCreated`. Los eventos de archivo incluyen metadatos, checksum SHA-256 y usuario autenticado; mover y renombrar incluyen las rutas anterior y nueva.

Para eliminar, mover o renombrar, captura el estado antes de modificar el almacenamiento:

```php
$before = KCFinder::snapshot('/imagenes/nombre-anterior.jpg', 'rename');

// Ejecuta la operación existente de KCFinder.

$result = KCFinder::reportRenamed($before, '/imagenes/nombre-nuevo.jpg');
return response()->json($result, $result->httpStatus());
```

Esto permite sincronizar catálogos y auditorías por evento sin volver a recorrer todos los archivos.

::: warning Compatibilidad
El formato estructurado es optativo. La versión 1.1 no altera automáticamente las respuestas históricas ni el JavaScript del navegador: conecta los métodos `report*` en los callbacks de la integración que ya se ejecutan después de una operación exitosa.
:::

::: tip Seguridad
El Gate se evalúa antes de resolver metadatos del archivo. Mantén la autorización en el servidor aunque la interfaz oculte operaciones.
:::

[Repositorio y referencia del adaptador →](https://github.com/krma-cl/kcfinder-laravel)
