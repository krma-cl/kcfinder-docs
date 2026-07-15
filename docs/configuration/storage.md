# Uploads y URLs

La ruta lógica, la ruta física y la URL pública representan conceptos distintos. Mantenerlos separados permite utilizar discos locales, almacenamiento externo, proxies y adaptadores de framework sin exponer la estructura del servidor.

## Modelo recomendado

```text
Ruta lógica:  /documentos/2026/informe.pdf
Ruta física:  /srv/app/storage/documentos/2026/informe.pdf
URL pública:  /storage/documentos/2026/informe.pdf
```

## Reglas de despliegue

- Conserva uploads fuera de directorios ejecutables.
- Bloquea la ejecución de PHP, CGI y scripts equivalentes.
- Concede al proceso web sólo lectura y escritura necesarias.
- No utilices la URL como ruta física ni construyas rutas concatenando entrada del usuario.
- Si un proxy genera la URL pública, define explícitamente el prefijo externo.

## Persistencia en Docker

El entorno Docker de desarrollo monta `upload/` como volumen persistente. Docker sigue siendo opcional y no cambia la instalación tradicional.
