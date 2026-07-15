---
title: Migración desde KCFinder original
description: Ruta conservadora para actualizar una instalación existente de KCFinder.
---

# Migración desde KCFinder original

KCFinder Resurrected conserva la filosofía de despliegue ligero y gran parte de la configuración histórica, pero una actualización debe tratarse como una migración controlada.

## Antes de comenzar

1. Identifica la versión y las modificaciones locales de tu instalación.
2. Respalda `conf/`, la carpeta de uploads y cualquier tema o plugin propio.
3. Registra permisos, rutas públicas, integración con el editor y reglas del servidor web.
4. Monta la nueva versión en una ruta de prueba; no sobrescribas producción directamente.

## Procedimiento recomendado

1. Descarga una versión estable desde [KCFinder Resurrected](https://github.com/krma-cl/kcfinder-Resurrected/releases).
2. Instálala limpia y confirma que carga con su configuración predeterminada.
3. Compara las opciones antiguas con la [referencia actual](../reference/configuration).
4. Reaplica sólo las opciones necesarias en `conf/config.local.php`.
5. Conecta una copia de los uploads y valida lectura, escritura y URLs.
6. Reinstala temas e integraciones compatibles como componentes separados.
7. Ejecuta la lista de comprobación de seguridad y tus flujos reales antes del cambio definitivo.

::: warning No copies la configuración a ciegas
Las instalaciones antiguas suelen contener rutas, callbacks o permisos personalizados. Migra cada decisión deliberadamente y mantén el respaldo hasta completar la validación.
:::

## Validación funcional

- Inicio y cierre de sesión de la aplicación anfitriona.
- Navegación y creación de carpetas.
- Subida, miniaturas, descarga, renombrado y eliminación.
- Selector de archivos en cada editor integrado.
- URLs con el host, puerto o proxy reales de producción.
- Restricciones por tipo, tamaño y permisos.

Si encuentras una incompatibilidad reproducible, abre un [issue](https://github.com/krma-cl/kcfinder-Resurrected/issues) indicando versión de origen, PHP, servidor web y pasos para reproducirla.
