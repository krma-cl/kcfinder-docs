---
title: Contribuir
description: Cómo proponer cambios al núcleo, adaptadores, tema o documentación.
---

# Contribuir

Las contribuciones son bienvenidas en el repositorio responsable de cada componente.

## Antes de abrir un cambio

1. Busca issues y pull requests relacionados.
2. Describe el problema observable, las versiones involucradas y cómo reproducirlo.
3. Mantén el cambio limitado a una responsabilidad.
4. Conserva compatibilidad con la matriz declarada por ese repositorio.
5. Agrega o actualiza pruebas y documentación cuando corresponda.

## Repositorios

- [Núcleo KCFinder](https://github.com/krma-cl/kcfinder-Resurrected)
- [Adaptador Laravel](https://github.com/krma-cl/kcfinder-laravel)
- [Bundle Symfony](https://github.com/krma-cl/kcfinder-symfony-bundle)
- [Tema Bootstrap 5](https://github.com/krma-cl/kcfinder-bootstrap5-theme)
- [Documentación](https://github.com/krma-cl/kcfinder-docs)

## Seguridad

No publiques vulnerabilidades explotables en un issue abierto. Sigue la [política de seguridad](../security/) del proyecto y utiliza el canal privado indicado por el repositorio afectado.

## Documentación

Las correcciones pequeñas pueden realizarse desde el enlace **Editar esta página en GitHub**. Para cambios mayores, ejecuta el sitio localmente:

```bash
npm install
npm run docs:dev
```

El contenido debe ser concreto, verificable y compatible con las versiones publicadas; evita documentar funciones todavía no distribuidas como si fueran estables.
