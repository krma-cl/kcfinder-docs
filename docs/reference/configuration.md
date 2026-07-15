---
title: Referencia de configuración
description: Mapa práctico de las áreas de configuración de KCFinder.
---

# Referencia de configuración

La configuración efectiva depende de la versión instalada. Este mapa resume las decisiones que conviene revisar y enlaza al código del release como fuente definitiva.

| Área | Propósito | Recomendación |
| --- | --- | --- |
| `disabled` | Habilita o bloquea el navegador | Mantener bloqueado hasta autenticar y autorizar al usuario |
| `uploadURL` | URL pública base de los archivos | Usar una ruta o URL coherente con el proxy y el puerto externo |
| `uploadDir` | Ruta física de almacenamiento | Preferir una ruta explícita, escribible y fuera del código desplegable |
| `types` | Tipos, extensiones y directorios | Mantener una lista permitida mínima por caso de uso |
| `maxImageWidth` / `maxImageHeight` | Límites de imágenes | Ajustar a las necesidades reales de la aplicación |
| `thumbWidth` / `thumbHeight` | Miniaturas | Dimensionar considerando calidad, memoria y volumen |
| `theme` | Tema visual activo | Usar `default` o un tema instalado y probado |
| `cookieDomain` | Alcance de cookies | Configurar un dominio, nunca un host con puerto |

## Configuración local

Conserva los valores propios del entorno fuera de los archivos distribuidos cuando tu instalación lo permita. No publiques rutas internas, credenciales, secretos ni callbacks específicos del cliente.

```php
<?php

return array(
    'disabled' => false,
    'uploadURL' => '/storage/uploads',
    'uploadDir' => '/var/www/storage/uploads',
    'theme' => 'bootstrap5',
);
```

::: danger Autorización
`disabled => false` no reemplaza la autenticación. La aplicación anfitriona debe habilitar KCFinder únicamente después de verificar al usuario y sus permisos.
:::

Consulta también [uploads y URLs](../configuration/storage), [imágenes y miniaturas](../configuration/images) y la configuración del release instalado en [GitHub](https://github.com/krma-cl/kcfinder-Resurrected/tree/master/conf).
