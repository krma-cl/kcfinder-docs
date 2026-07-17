# Eventos de operaciones

KCFinder incorpora un observador neutral y optativo en los puntos de éxito del navegador clásico. Permite integrar auditoría, catálogos o eventos de frameworks sin modificar `browser.php` ni recorrer nuevamente todo el almacenamiento.

## Operaciones cubiertas

- carga directa, múltiple, AJAX y mediante arrastre;
- edición y recorte de imágenes;
- copia, movimiento y renombrado;
- eliminación;
- creación, renombrado y eliminación recursiva de carpetas.

Mover, renombrar y eliminar notifican una fase previa para capturar el estado anterior. Las operaciones masivas emiten una notificación individual solamente para cada archivo que fue modificado correctamente.

## Compatibilidad

El observador predeterminado es nulo: actualizar el núcleo no activa callbacks ni cambia las respuestas históricas. Se configura mediante `_operationObserver` en `conf/config.local.php`.

Si un observador falla después de una mutación, KCFinder registra el error y conserva la respuesta exitosa de la operación principal. No intenta una reversión parcial ni afirma que un archivo guardado no fue cargado.

## Laravel

El adaptador `krma-cl/kcfinder-laravel:^1.3.1` incluye el puente oficial. Al
habilitar su ruta HTTP autenticada, el paquete inyecta automáticamente la
implementación proporcionada por el contenedor mediante la configuración de
ejecución confiable de KCFinder 4.8.1:

```php
'http' => [
    'enabled' => true,
    'middleware' => ['web', 'auth', 'can:manage-files'],
],
```

El puente toma snapshots autorizados y emite `FileUploaded`, `FileEdited`,
`FileCopied`, `FileMoved`, `FileRenamed`, `FileDeleted`, `DirectoryCreated`,
`DirectoryRenamed` y `DirectoryDeleted` con metadatos, checksum y usuario
autenticado.

[Ver la guía completa de Laravel →](../guide/laravel)
