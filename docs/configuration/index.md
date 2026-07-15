# Configuración

KCFinder mantiene la configuración tradicional en PHP y permite que la aplicación anfitriona sobrescriba valores mediante sesión. Prioriza una configuración explícita, versiona sólo ejemplos seguros y conserva los valores locales fuera del repositorio.

## Orden de configuración

1. Valores predeterminados del núcleo.
2. `conf/config.php` de la instalación.
3. `conf/config.local.php`, cuando se utiliza.
4. Valores proporcionados por la integración y la sesión.

## Ajustes esenciales

| Opción | Propósito |
|---|---|
| `disabled` | Mantiene KCFinder cerrado hasta que la aplicación autentique y autorice al usuario. |
| `uploadURL` | URL pública o controlada que representa el almacenamiento. |
| `uploadDir` | Ruta física confinada donde se administran archivos. |
| `theme` | Tema visual activo, por ejemplo `default` o `bootstrap5`. |
| `types` | Reglas de extensiones, MIME, tamaños y dimensiones por tipo de archivo. |

## Configuración por sesión

```php
$_SESSION['KCFINDER'] = [
    'disabled' => false,
    'uploadURL' => '/storage/media',
    'uploadDir' => '/srv/app/storage/media',
    'theme' => 'bootstrap5',
];
```

::: warning No mezcles URL y ruta física
`uploadURL` se entrega al navegador. `uploadDir` sólo debe utilizarse en el servidor y nunca debe filtrarse en respuestas o mensajes de error.
:::

Continúa con [uploads y URLs](./storage) o revisa la [referencia de configuración](../reference/configuration).
