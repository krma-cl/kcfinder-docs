# Checklist de producción

## Identidad y sesión

- [ ] La aplicación anfitriona autentica al usuario.
- [ ] KCFinder permanece deshabilitado para sesiones anónimas.
- [ ] Cookies `Secure`, `HttpOnly` y `SameSite` están configuradas.
- [ ] CSRF está habilitado y comprobado en operaciones AJAX.

## Archivos

- [ ] Extensiones y MIME permitidos se definen explícitamente.
- [ ] Uploads no permiten ejecutar PHP ni otros scripts.
- [ ] Rutas lógicas se confinan dentro de la raíz configurada.
- [ ] Tamaños y píxeles máximos corresponden a los recursos del servidor.

## Plataforma

- [ ] Se utiliza una versión estable publicada.
- [ ] HTTPS está activo.
- [ ] Fileinfo y un controlador de imágenes están disponibles.
- [ ] Se ejecutaron pruebas de subida, miniaturas, descarga y sesiones.
- [ ] `composer audit --locked` y la suite del proyecto pasan antes del despliegue.
