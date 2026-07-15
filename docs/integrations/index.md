# Integraciones

El núcleo independiente expone contratos modernos sin depender de Laravel o Symfony. Cada adaptador traduce almacenamiento, autorización y eventos del framework hacia esos contratos.

## Integraciones oficiales

| Integración | Paquete | Responsabilidad |
|---|---|---|
| Standalone PHP | ZIP tradicional | Sesión, configuración y publicación directa. |
| Laravel | `krma-cl/kcfinder-laravel` | Storage, Gates, configuración y eventos. |
| Symfony | `krma-cl/kcfinder-symfony-bundle` | Flysystem, Voters, servicios y eventos. |

## Integraciones de editores

KCFinder puede abrirse desde CKEditor, TinyMCE, un iframe, una ventana o un componente personalizado. Para integraciones nuevas se recomienda el [selector JSON](./selector-json) y una política explícita de orígenes para `postMessage`.

## Responsabilidades compartidas

La aplicación anfitriona siempre conserva control sobre:

- autenticación y autorización;
- URL pública y almacenamiento;
- publicación de la interfaz;
- política de archivos permitidos;
- recepción segura del archivo seleccionado.
