---
title: Búsqueda de carpetas y archivos
description: Activación, límites y comportamiento de la búsqueda optativa incluida desde KCFinder 4.7.
---

# Búsqueda de carpetas y archivos

KCFinder 4.7 incorpora una búsqueda optativa por nombre. El árbol muestra carpetas coincidentes, carpetas que contienen archivos coincidentes y sus antecesoras; la ventana derecha filtra los archivos de la carpeta activa con el mismo término.

No indexa ni inspecciona el contenido de PDF, documentos Office, imágenes o ZIP.

## Activación

La función está desactivada de forma predeterminada. Agrégala a `conf/config.local.php`:

```php
<?php

$_LOCALS['search'] = array(
    'enabled' => true,
    'minChars' => 2,
    'maxResults' => 100,
    'maxEntries' => 25000,
    'timeoutMs' => 1500,
    'debounceMs' => 350,
    'scope' => 'global',
);
```

| Opción | Predeterminado | Uso |
| --- | ---: | --- |
| `enabled` | `false` | Muestra el buscador y habilita su endpoint. |
| `minChars` | `2` | Caracteres mínimos antes de consultar. |
| `maxResults` | `100` | Máximo de carpetas coincidentes. |
| `maxEntries` | `25000` | Entradas examinadas como máximo por solicitud. |
| `timeoutMs` | `1500` | Presupuesto aproximado del recorrido. |
| `debounceMs` | `350` | Pausa después de escribir antes de buscar. |
| `scope` | `global` | Busca en toda la raíz autorizada; usa `current` para limitarla a la carpeta activa. |

`Enter` consulta inmediatamente, `Escape` limpia el término y el botón de cierre restaura el árbol normal.

## Rendimiento y seguridad

La consulta se ejecuta sólo bajo la raíz autorizada del tipo activo, omite enlaces simbólicos y exige el token CSRF de la sesión. Nunca devuelve rutas físicas.

La respuesta informa por separado carpetas y archivos coincidentes, conserva la
ruta completa de cada resultado e indica si el recorrido se truncó por
`maxResults`, `maxEntries` o `timeoutMs`.

Para árboles muy grandes, almacenamiento de red o adaptadores remotos, aumenta `minChars`, reduce los límites o mantén la función desactivada hasta disponer de un índice propio. La búsqueda integrada está pensada para bibliotecas locales pequeñas y medianas.

## Tema Bootstrap 5

El tema Bootstrap 5 `0.3.1` presenta el buscador, sus estados y contadores con la misma altura y lenguaje visual de la barra principal. El tema no ejecuta el recorrido: toda la política continúa en el núcleo.
