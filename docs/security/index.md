# Seguridad

KCFinder administra archivos subidos por usuarios. Debe ejecutarse detrás de autenticación y autorización reales, con uploads confinados y reglas explícitas de tipo de archivo.

## Principios obligatorios

- Mantén `disabled` activo hasta completar autenticación y autorización.
- Conserva `_sessionCsrf` y utiliza un token impredecible ligado a la sesión.
- Define `allowExts` y `allowMimeTypes`; evita comodines amplios.
- Aloja uploads donde el servidor no pueda ejecutar scripts.
- Configura cookies con HTTPS, `Secure`, `HttpOnly` y un `SameSite` adecuado.
- Limita dominios externos a orígenes conocidos.
- Aplica mínimos privilegios al usuario del proceso PHP.

## Validación de archivos

La extensión, el `Content-Type` enviado por el navegador y el MIME detectado cumplen funciones distintas. La política debe considerar los tres y rechazar inconsistencias.

## Reportar una vulnerabilidad

No publiques detalles explotables en Issues. Utiliza el [reporte privado de vulnerabilidades](https://github.com/krma-cl/kcfinder-Resurrected/security/advisories/new) e incluye versión afectada, impacto, reproducción mínima y mitigaciones conocidas.

::: danger Los controles visuales no son controles de seguridad
Ocultar un botón no reemplaza la autorización del servidor. Cada operación debe validar autorización, CSRF, tipo de archivo y confinamiento de ruta.
:::
