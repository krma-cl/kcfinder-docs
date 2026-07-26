---
title: Movimiento directo
description: Movimiento optativo de archivos y carpetas mediante arrastre o una acción accesible.
---

# Movimiento directo

KCFinder 4.10 permite mover archivos seleccionados y carpetas completas hacia
otra carpeta del árbol. La capacidad es optativa y permanece desactivada para
conservar el comportamiento de instalaciones existentes.

## Activación

```php
$_LOCALS['dragMove'] = array(
    'enabled' => true,
    'maxItems' => 100,
);
```

La activación no sustituye los permisos. El servidor exige además
`access.files.move` para archivos y `access.dirs.move` para carpetas.

## Formas de uso

- Arrastra uno o varios archivos seleccionados sobre una carpeta.
- Arrastra una carpeta sobre otra para cambiar su ruta.
- Utiliza **Mover a…** desde el menú contextual con teclado, mouse o pantalla
  táctil.

Todas las variantes llegan a la misma operación del servidor. El navegador no
decide por sí solo las rutas ni la autorización.

## Conflictos

Si el destino ya contiene uno o más nombres, KCFinder presenta una decisión
para toda la operación:

- **Sobrescribir**;
- **Conservar ambos**, agregando un sufijo seguro;
- **Cancelar**.

El servidor vuelve a validar origen, destino, permisos, confinamiento de rutas
y CSRF antes de modificar el almacenamiento. No se sobrescribe silenciosamente.

## Integraciones y eventos

El observador neutral informa cada archivo movido con su ruta anterior y
resultante. Mover una carpeta emite una operación de carpeta con ambos prefijos,
permitiendo que Laravel, Symfony u otra aplicación actualicen referencias sin
recorrer todo el árbol.

La papelera recuperable y el orden visual de carpetas son trabajos futuros
independientes. Activar `dragMove` no habilita ninguna de esas capacidades.

[Ver eventos de operaciones →](../integrations/operation-events)
