# Guía de inicio con Symfony

El bundle oficial conecta Flysystem, Symfony Security y el event dispatcher con KCFinder.

## Requisitos

- PHP 8.2 o superior.
- Symfony 7.4 u 8.x.
- Un filesystem Flysystem 3 registrado como servicio.

## 1. Instalar el bundle

```bash
composer require krma-cl/kcfinder-symfony-bundle:^1.1
```

Registra `Krma\KCFinder\Symfony\KCFinderBundle` si Symfony Flex no lo hace automáticamente.

## 2. Configurar servicios

```yaml
# config/packages/kcfinder.yaml
kcfinder:
    filesystem_service: 'app.transparency_filesystem'
    url_prefix: '/storage/transparencia'
    security_attribute: 'KCFINDER_SELECT'
    browser_url: '/kcfinder/browse.php'
    theme_directory: '%kernel.project_dir%/public/kcfinder/themes'
```

## 3. Autorizar mediante un Voter

Crea un Voter para `KCFINDER_SELECT`. El subject contiene `operation` y `path`; la decisión debe tomarse antes de acceder al almacenamiento.

## 4. Resolver una selección

```php
use Krma\KCFinder\Symfony\KCFinderManager;

$file = $manager->select('/01-actos/DO-20130614.pdf');

return $this->json($file);
```

Después de una selección autorizada se emite `FileSelectedEvent`.

## 5. Publicar el tema Bootstrap 5

Instala el paquete opcional y publícalo en una carpeta pública controlada por la
aplicación:

```bash
composer require krma-cl/kcfinder-bootstrap5-theme:^0.3.1
php bin/console kcfinder:install-theme
```

El comando usa `kcfinder.theme_directory`, cuyo destino predeterminado es
`public/kcfinder/themes`, y reemplaza `bootstrap5` de forma atómica. No modifica
el núcleo ni requiere mantener una copia manual en `vendor`.

::: info Alcance del bundle
El comando resuelve la distribución del tema. La aplicación continúa siendo
responsable de exponer el navegador mediante una ruta o controlador autorizado,
según su arquitectura.
:::

[Repositorio y referencia del bundle →](https://github.com/krma-cl/kcfinder-symfony-bundle)
