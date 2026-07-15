# Elige una forma de instalación

KCFinder conserva su despliegue tradicional y añade integraciones oficiales para aplicaciones modernas. Elige la ruta según la arquitectura de tu proyecto, no sólo según las herramientas disponibles en desarrollo.

## Standalone PHP

Utiliza el ZIP tradicional cuando necesitas la interfaz web completa en una aplicación PHP, un CMS o una integración personalizada. No requiere Composer, Node.js ni Docker en producción.

[Comenzar con Standalone PHP →](./standalone)

## Laravel

Instala el adaptador cuando Laravel deba proporcionar almacenamiento, autorización y eventos. El navegador de KCFinder continúa desplegándose de forma controlada y no se publica automáticamente desde `vendor`.

[Comenzar con Laravel →](./laravel)

## Symfony

Utiliza el bundle oficial para conectar un filesystem Flysystem, Symfony Security y el event dispatcher con el selector moderno.

[Comenzar con Symfony →](./symfony)

::: tip Compatibilidad compartida
Las tres rutas utilizan el mismo núcleo y el mismo descriptor JSON de archivos. Puedes cambiar la capa de integración sin crear un protocolo paralelo para el selector.
:::
