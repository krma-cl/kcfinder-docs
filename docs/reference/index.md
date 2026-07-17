---
title: Ecosistema y compatibilidad
description: Componentes oficiales, versiones y responsabilidades del ecosistema KCFinder.
---

# Ecosistema y compatibilidad

El núcleo permanece instalable como una aplicación PHP independiente. Los adaptadores y el tema son paquetes separados: cada proyecto incorpora sólo las piezas que necesita.

| Componente | Paquete o repositorio | Compatibilidad principal |
| --- | --- | --- |
| Núcleo | [`krma-cl/kcfinder`](https://packagist.org/packages/krma-cl/kcfinder) | PHP 8.2–8.5 |
| Laravel | [`krma-cl/kcfinder-laravel`](https://packagist.org/packages/krma-cl/kcfinder-laravel) | Laravel 12–13 |
| Symfony | [`krma-cl/kcfinder-symfony-bundle`](https://packagist.org/packages/krma-cl/kcfinder-symfony-bundle) | Symfony 7.4–8.x, Flysystem 3 |
| Tema Bootstrap 5 | [`krma-cl/kcfinder-bootstrap5-theme`](https://packagist.org/packages/krma-cl/kcfinder-bootstrap5-theme) | KCFinder 4.x |
| Documentación | [`kcfinder-docs`](https://github.com/krma-cl/kcfinder-docs) | VitePress / GitHub Pages |

Las restricciones exactas pueden cambiar entre releases. Antes de actualizar, revisa siempre `composer.json`, las notas de versión y la matriz de pruebas del componente que usarás.

## Responsabilidades

- **Núcleo:** explorador, operaciones de archivos, contratos del selector, configuración y distribución tradicional.
- **Adaptadores:** autenticación, autorización, almacenamiento y eventos propios de cada framework.
- **Tema:** presentación, iconografía y comportamiento responsivo; no reemplaza controles de seguridad.
- **Aplicación anfitriona:** identidad del usuario, políticas de acceso, rutas de almacenamiento y exposición pública de archivos.

## Versionado

Los componentes siguen versiones independientes. Una actualización del tema no obliga a actualizar Laravel o Symfony, y el núcleo puede utilizarse sin ninguno de ellos. Para producción, fija versiones estables y prueba el conjunto completo de tu aplicación.
