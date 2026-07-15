---
title: Temas
description: Personaliza KCFinder sin acoplar la interfaz al núcleo.
---

# Temas

KCFinder mantiene la presentación separada del núcleo. Un tema puede renovar estilos, iconos y comportamiento responsivo sin cambiar la API de archivos ni obligar a las instalaciones existentes a adoptar nuevas dependencias.

## Tema oficial Bootstrap 5

El tema oficial moderniza la interfaz con Bootstrap 5 y Bootstrap Icons, conservando los flujos clásicos de navegación, carga, selección y administración de archivos.

- Se distribuye en un [repositorio independiente](https://github.com/krma-cl/kcfinder-bootstrap5-theme).
- No depende de CDN: los recursos necesarios se incluyen en el paquete.
- Es opcional; el tema predeterminado continúa disponible.
- Su versionado es independiente del núcleo para evitar actualizaciones innecesarias.

[Instalar el tema Bootstrap 5 →](./bootstrap5)

## Crear un tema propio

Parte de un tema existente y conserva los nombres de plantillas, selectores y puntos de integración que utiliza el JavaScript del núcleo. Evita modificar archivos de `core/` o `js/` sólo para obtener un cambio visual: eso dificulta actualizar KCFinder más adelante.

::: tip Compatibilidad
Prueba al menos navegación de carpetas, modos lista y miniaturas, subida, menús contextuales, diálogos, selector de idioma y modo selector antes de publicar un tema.
:::
