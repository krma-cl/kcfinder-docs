---
title: Tema Bootstrap 5
description: Instalación y activación del tema Bootstrap 5 para KCFinder.
---

# Tema Bootstrap 5

El paquete `krma-cl/kcfinder-bootstrap5-theme` ofrece una interfaz responsiva y moderna para KCFinder 4.x. Incluye localmente Bootstrap 5.3 y Bootstrap Icons; no realiza peticiones a CDN.

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
- Radios, checkboxes y selector de idioma.
- Modos lista y miniaturas.
- Menús contextuales, preferencias y ventanas modales.
- Selección de archivos desde CKEditor, TinyMCE o una integración propia.

Consulta los detalles y versiones exactas en el [repositorio del tema](https://github.com/krma-cl/kcfinder-bootstrap5-theme).
