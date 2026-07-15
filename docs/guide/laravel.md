# Guía de inicio con Laravel

El adaptador oficial conecta Laravel Storage, Gates y eventos con el selector independiente de KCFinder.

## Requisitos

- PHP 8.2 o superior.
- Laravel 12 o 13.
- Navegador KCFinder desplegado mediante una publicación web controlada.

## 1. Instalar el adaptador

```bash
composer require krma-cl/kcfinder-laravel:^1.0
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

::: tip Seguridad
El Gate se evalúa antes de resolver metadatos del archivo. Mantén la autorización en el servidor aunque la interfaz oculte operaciones.
:::

[Repositorio y referencia del adaptador →](https://github.com/krma-cl/kcfinder-laravel)
