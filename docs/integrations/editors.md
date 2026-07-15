# CKEditor y TinyMCE

KCFinder conserva sus adaptadores heredados para CKEditor y TinyMCE. Antes de reutilizar un ejemplo histórico, revisa la versión real del editor y evita copiar callbacks que confíen en cualquier origen.

## Flujo recomendado

1. La aplicación autentica y autoriza al usuario.
2. Abre KCFinder con una URL controlada.
3. El usuario selecciona un archivo.
4. El callback o `postMessage` valida el origen.
5. El editor recibe una URL o descriptor previamente autorizado.

Para integraciones nuevas, utiliza el [selector JSON](./selector-json) como contrato de aplicación y transforma su resultado al formato requerido por el editor.
