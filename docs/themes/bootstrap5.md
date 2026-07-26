---
title: Tema Bootstrap 5
description: Instalación y activación del tema Bootstrap 5 para KCFinder.
---

# Tema Bootstrap 5

El paquete `krma-cl/kcfinder-bootstrap5-theme` ofrece una interfaz responsiva y moderna para KCFinder 4.x. Incluye localmente Bootstrap 5.3 y Bootstrap Icons; no realiza peticiones a CDN.

Desde la versión `0.3.1` también se distribuye mediante Composer. La versión
`0.4.0` añade la presentación del movimiento directo y una paleta semántica
configurable desde KCFinder 4.10. Incluye
`VERSION`, un manifiesto reproducible con hashes SHA-256 y un publicador
neutral para instalar el tema fuera de `vendor`. Conserva la presentación de
búsqueda, el separador redimensionable y los ajustes visuales de la versión
anterior.

## Instalación con Composer

```bash
composer require krma-cl/kcfinder-bootstrap5-theme:^0.4
```

### Standalone PHP

Publica el tema en la carpeta `themes` de la instalación:

```bash
vendor/bin/kcfinder-theme-install --target=/ruta/publica/kcfinder/themes
```

El comando escribe `themes/bootstrap5` de forma atómica y conserva una copia
anterior si la publicación no puede completarse. Usa `--force` para reemplazar
una instalación existente.

KCFinder 4.9 o superior admite raíces externas confiables mediante `_themeRoots`
cuando la aplicación anfitriona prefiera no publicar el tema:

```php
$_LOCALS['_themeRoots'] = array(
    'bootstrap5' => dirname(__DIR__) . '/vendor/krma-cl/kcfinder-bootstrap5-theme/dist/bootstrap5',
);
```

La ruta debe ser absoluta, estar definida por el servidor y nunca provenir de
la consulta del navegador.

## Paleta semántica

KCFinder 4.10 puede personalizar el tema sin editar los archivos publicados:

```php
$_LOCALS['themeOptions']['bootstrap5']['colors'] = array(
    'primary' => '#0057B8',
    'secondary' => '#667085',
    'success' => '#198754',
    'danger' => '#B42318',
    'warning' => '#F79009',
    'light' => '#F8F9FA',
    'dark' => '#101828',
);
```

Sólo se aceptan esos siete nombres y valores `#RRGGBB`. Los valores inválidos
se ignoran y nunca se convierten en declaraciones CSS arbitrarias. Como la
configuración pertenece a la aplicación, permanece intacta al actualizar el
tema mediante Composer.

### Laravel

Laravel 12 o 13 con el adaptador 1.4 detecta el paquete Composer y lo monta
automáticamente en el navegador autenticado:

```bash
php artisan kcfinder:install-assets
php artisan kcfinder:clear-cache
```

No copia PHP del tema al directorio público ni modifica el núcleo instalado en
`vendor`.

### Symfony

El bundle 1.1 incorpora un publicador equivalente:

```bash
php bin/console kcfinder:install-theme
```

El destino predeterminado es `public/kcfinder/themes`. Puede cambiarse con
`kcfinder.theme_directory`.

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

Repite el publicador correspondiente y limpia los dos archivos de caché del
tema. Tus uploads y la configuración del núcleo no deben modificarse.

## Comprobaciones recomendadas

- Barra superior y panel lateral en escritorio y móvil.
- Buscador, limpieza, estados y filtrado de la carpeta activa cuando se use KCFinder 4.7 o superior.
- Separador redimensionable entre el árbol y los archivos en escritorio.
- Radios, checkboxes y selector de idioma.
- Modos lista y miniaturas.
- Menús contextuales, preferencias y ventanas modales.
- Ayudante de arrastre, destinos de carpeta y diálogo de conflictos en KCFinder 4.10.
- Selección de archivos desde CKEditor, TinyMCE o una integración propia.

Consulta los detalles y versiones exactas en el [repositorio del tema](https://github.com/krma-cl/kcfinder-bootstrap5-theme).
