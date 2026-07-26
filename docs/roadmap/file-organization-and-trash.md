---
title: Organización por arrastre y papelera
description: Propuesta futura para mover archivos, ordenar carpetas y recuperar elementos eliminados.
---

# Organización por arrastre y papelera

::: info Entrega incremental
El movimiento directo forma parte de KCFinder 4.10 y permanece desactivado de
forma predeterminada. El orden visual y la papelera continúan planificados y no
están implementados en esta versión.
:::

KCFinder contempla tres mejoras optativas:

1. mover archivos entre carpetas mediante arrastrar y soltar;
2. conservar un orden visual personalizado de las carpetas;
3. enviar elementos a una papelera recuperable antes de eliminarlos definitivamente.

## Movimiento por arrastre

Arrastrar es una forma adicional de solicitar la operación **Mover**. El servidor continúa validando permisos, CSRF, origen, destino, colisiones y confinamiento de rutas.

La misma operación incluye una alternativa **Mover a…** utilizable con teclado y pantallas táctiles. El elemento sólo desaparece de la carpeta original después de que el servidor confirma el movimiento.

La implementación publicada incluye:

- destino resaltado;
- movimiento de uno o varios archivos seleccionados;
- movimiento de carpetas completas;
- límite configurable por operación;
- un evento por archivo y un evento de cambio de prefijo por carpeta.

La expansión demorada de carpetas y un resumen detallado de operaciones
parciales quedan como mejoras posteriores.

## Orden visual de carpetas

Reordenar carpetas no cambiará sus nombres ni rutas. El orden será metadato de presentación almacenado fuera del árbol visible de uploads.

Cuando la función esté desactivada o el almacén de orden no esté disponible, KCFinder mantendrá el orden alfabético estable. Antes de implementarla se definirá si el orden es compartido, por tipo de archivo o por usuario.

## Papelera recuperable

Con la papelera habilitada, **Eliminar** pasará a significar **Mover a la papelera**. Las acciones **Restaurar**, **Eliminar definitivamente** y **Vaciar papelera** tendrán permisos y confirmaciones propios.

La papelera:

- permanecerá fuera de navegación, búsqueda, selector y URLs públicas;
- conservará la ruta original y los metadatos necesarios para restaurar;
- aplicará una política explícita cuando el destino ya contenga otro elemento;
- podrá limitar retención, cantidad y tamaño;
- distinguirá en sus eventos entre papelera, restauración y borrado definitivo.

## Compatibilidad

Las tres funciones permanecen desactivadas por defecto. Una instalación que no
las habilite conserva su interfaz y comportamiento actuales. El movimiento se
habilita explícitamente mediante `dragMove.enabled` y respeta
además `access.files.move` y `access.dirs.move`.

El núcleo seguirá siendo independiente. Laravel, Symfony y almacenamientos remotos podrán implementar las capacidades mediante contratos neutrales, sin introducir dependencias de frameworks en KCFinder.

## Dependencias y entrega

La implementación no dependerá de actualizar primero a jQuery 4. Las renovaciones se probarán en paralelo, pero en cambios separados:

- Sass 1.101 ya fue validado y publicado con el tema Bootstrap 5 0.4;
- PHPUnit 13 tendrá una prueba de compatibilidad propia;
- jQuery 4 seguirá la migración progresiva de APIs y jQuery UI.

Esto permite validar y revertir una dependencia sin confundirla con la lógica de movimiento o recuperación.

## Criterios mínimos

- alternativa de teclado para cada gesto;
- validación completa en el servidor;
- orden visual sin cambios de ruta;
- papelera inaccesible desde interfaces públicas;
- restauración y purga con permisos explícitos;
- eventos consistentes para integraciones;
- pruebas en PHP 8.2–8.5, tema clásico, Bootstrap 5 y operaciones masivas.

La especificación técnica completa se mantiene en [`doc/FileOrganizationAndTrash.md`](https://github.com/krma-cl/kcfinder-Resurrected/blob/master/doc/FileOrganizationAndTrash.md).
