# Selector JSON

El selector moderno entrega un descriptor estable y serializable sin retirar los callbacks heredados.

## Estructura

```json
{
  "name": "DO-20130614.pdf",
  "path": "/01-actos/diario-oficial/2013/DO-20130614.pdf",
  "url": "/storage/transparencia/01-actos/diario-oficial/2013/DO-20130614.pdf",
  "mime": "application/pdf",
  "size": 184320
}
```

## Significado de los campos

| Campo | Descripción |
|---|---|
| `name` | Nombre base del archivo. |
| `path` | Ruta lógica dentro del almacenamiento autorizado. |
| `url` | URL resuelta para el consumidor. |
| `mime` | MIME detectado desde el archivo. |
| `size` | Tamaño en bytes. |

## `postMessage`

Cuando el selector vive en otra ventana o iframe, valida siempre `event.origin`, el origen esperado y la forma completa del mensaje. Nunca aceptes `*` como política de confianza en producción.

::: tip Compatibilidad
El protocolo es opt-in. Las integraciones heredadas pueden continuar recibiendo únicamente la URL mientras se migra el consumidor.
:::
