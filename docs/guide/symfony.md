# Guía de inicio con Symfony

El bundle oficial conecta Flysystem, Symfony Security y el event dispatcher con KCFinder.

## Requisitos

- PHP 8.2 o superior.
- Symfony 7.4 u 8.x.
- Un filesystem Flysystem 3 registrado como servicio.

## 1. Instalar el bundle

```bash
composer require krma-cl/kcfinder-symfony-bundle:^1.0
```

Registra `Krma\KCFinder\Symfony\KCFinderBundle` si Symfony Flex no lo hace automáticamente.

## 2. Configurar servicios

```yaml
# config/packages/kcfinder.yaml
kcfinder:
    filesystem_service: 'app.transparency_filesystem'
    url_prefix: '/storage/transparencia'
    security_attribute: 'KCFINDER_SELECT'
    browser_url: '/vendor/kcfinder/browse.php'
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

[Repositorio y referencia del bundle →](https://github.com/krma-cl/kcfinder-symfony-bundle)
