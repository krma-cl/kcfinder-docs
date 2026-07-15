---
title: Descriptor de archivo
description: Contrato JSON del selector moderno de KCFinder.
---

# Descriptor de archivo

El selector moderno puede entregar un objeto estructurado además de conservar el modo clásico basado en URL o nombre de archivo.

```json
{
  "name": "DO-20130614.pdf",
  "path": "/01-actos/diario-oficial/2013/DO-20130614.pdf",
  "url": "/storage/transparencia/01-actos/diario-oficial/2013/DO-20130614.pdf",
  "mime": "application/pdf",
  "size": 184320
}
```

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `name` | `string` | Nombre base del archivo, con extensión |
| `path` | `string` | Ruta lógica dentro del almacenamiento seleccionado |
| `url` | `string` | URL utilizable por el navegador o la aplicación |
| `mime` | `string` | Tipo MIME detectado por el servidor |
| `size` | `integer` | Tamaño exacto en bytes |

## Consideraciones

- Trata todos los campos como datos no confiables al volver al servidor.
- No deduzcas autorización a partir de `path` o `url`; vuelve a comprobar permisos.
- `mime` describe el resultado de la detección del servidor, pero no reemplaza la validación de contenido.
- Una URL puede ser relativa para funcionar correctamente detrás de proxies o en subdirectorios.

Para escuchar el resultado desde el navegador, consulta [Selector JSON](../integrations/selector-json).
