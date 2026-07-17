# Guía de inicio con Standalone PHP

Esta ruta instala la interfaz completa de KCFinder como una aplicación PHP independiente.

## Requisitos

- PHP 8.2, 8.3, 8.4 o 8.5.
- Fileinfo e Intl.
- GD, Imagick o GraphicsMagick para imágenes y miniaturas.
- mbstring recomendada; EXIF y ZIP según las funciones habilitadas.

## 1. Descargar y verificar

Descarga el ZIP tradicional y su archivo `.sha256` desde [GitHub Releases](https://github.com/krma-cl/kcfinder-Resurrected/releases). Comprueba la suma antes de descomprimir.

## 2. Publicar la aplicación

Extrae la carpeta en una ubicación servida por PHP. Mantén uploads y configuración local fuera del control de versiones.

```text
public/
└── kcfinder/
    ├── browse.php
    ├── upload.php
    ├── conf/
    ├── themes/
    └── upload/
```

## 3. Configurar la integración

KCFinder falla cerrado. La aplicación anfitriona debe autenticar al usuario y habilitar explícitamente la sesión:

```php
$_SESSION['KCFINDER'] = [
    'disabled' => false,
    'uploadURL' => '/storage/uploads',
    'uploadDir' => '/srv/app/storage/uploads',
];
```

::: warning Producción
No utilices el ejemplo predeterminado como sistema de autenticación. Autoriza al usuario antes de habilitar KCFinder y revisa la [guía de seguridad](../security/).
:::

## 4. Comprobar el flujo

Verifica inicio de sesión, navegación, subida, miniaturas, descarga, operaciones AJAX y cierre de sesión antes de exponer la integración a usuarios finales.

## 5. Instalar el tema Bootstrap 5 con Composer

El tema es opcional y se versiona por separado:

```bash
composer require krma-cl/kcfinder-bootstrap5-theme:^0.3.1
vendor/bin/kcfinder-theme-install --target=/ruta/publica/kcfinder/themes
```

Activa después `bootstrap5` en la configuración. El publicador escribe en la
carpeta de la aplicación: no modifica el núcleo ni deja la instalación
dependiente de una copia manual dentro de `vendor`.

[Ver instalación, actualización y raíces externas →](../themes/bootstrap5)
