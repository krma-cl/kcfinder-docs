---
title: Tema Bootstrap 5
description: Instalación y activación del tema Bootstrap 5 para KCFinder.
---

# Tema Bootstrap 5

El paquete `krma-cl/kcfinder-bootstrap5-theme` ofrece una interfaz responsiva y moderna para KCFinder 4.x. Incluye localmente Bootstrap 5.3 y Bootstrap Icons; no realiza peticiones a CDN.

La versión `0.3.0` también se distribuye mediante Composer e incluye
`VERSION` y un manifiesto reproducible con hashes SHA-256. Conserva la
presentación de búsqueda, el separador redimensionable y los ajustes visuales
de la versión anterior.

## Instalación con Composer

```bash
composer require krma-cl/kcfinder-bootstrap5-theme:^0.3
```

En Laravel 12 o 13, el adaptador 1.3.1 puede publicarlo automáticamente:

```bash
php artisan kcfinder:install-assets
php artisan kcfinder:clear-cache
```

En una instalación independiente, copia
`vendor/krma-cl/kcfinder-bootstrap5-theme/dist/bootstrap5` a
`themes/bootstrap5`.

## Instalación manual

1. Descarga una versión estable desde [Releases](https://github.com/krma-cl/kcfinder-bootstrap5-theme/releases).
2. Copia la carpeta `dist/bootstrap5` dentro de `themes/bootstrap5` en tu instalación de KCFinder.
3. Activa el tema en `conf/config.php` o en tu configuración local:

```php
<?php

return array(
    'theme' => 'bootstrap5',
);
```

4. Elimina los archivos compilados anteriores, si existen:

```text
cache/theme_bootstrap5.css
cache/theme_bootstrap5.js
```

5. Abre `browse.php?theme=bootstrap5` para comprobar la interfaz antes de dejarlo como tema predeterminado.

## Actualización

Sustituye únicamente `themes/bootstrap5` por la nueva distribución y limpia los dos archivos de caché del tema. Tus uploads y la configuración del núcleo no deben modificarse.

## Comprobaciones recomendadas

- Barra superior y panel lateral en escritorio y móvil.
- Buscador, limpieza, estados y filtrado de la carpeta activa cuando se use KCFinder 4.7 o superior.
- Separador redimensionable entre el árbol y los archivos en escritorio.
- Radios, checkboxes y selector de idioma.
- Modos lista y miniaturas.
- Menús contextuales, preferencias y ventanas modales.
- Selección de archivos desde CKEditor, TinyMCE o una integración propia.

Consulta los detalles y versiones exactas en el [repositorio del tema](https://github.com/krma-cl/kcfinder-bootstrap5-theme).
