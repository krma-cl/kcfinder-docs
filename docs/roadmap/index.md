---
title: Roadmap
description: Dirección pública del ecosistema KCFinder Resurrected.
---

# Roadmap

KCFinder Resurrected busca ser una continuación mantenida, orientada a seguridad y preparada para producción, preservando compatibilidad y despliegue ligero.

## Entregado

- Compatibilidad y pruebas con PHP 8.2, 8.3, 8.4 y 8.5.
- Fortalecimiento acotado de seguridad y caracterización del sistema de archivos.
- Descriptor JSON para integraciones modernas.
- Distribución mediante Composer y Packagist.
- Adaptadores oficiales para Laravel y Symfony.
- Tema responsivo Bootstrap 5, opcional y versionado por separado.
- Portal unificado de documentación.
- Búsqueda optativa por nombre de carpetas y archivos, limitada y protegida con CSRF.
- Recorte robusto ante coordenadas decimales y tema Bootstrap 5 con separador redimensionable.
- Movimiento optativo por arrastre o **Mover a…**, conflictos controlados y
  eventos de cambio de ruta en KCFinder 4.10.
- Paleta semántica configurable y presentación del movimiento en el tema
  Bootstrap 5 0.4.

## Próximas líneas

- Ampliar ejemplos ejecutables para integraciones y editores.
- Consolidar pruebas de navegador y accesibilidad del tema móvil.
- Documentar extensiones y puntos estables del núcleo.
- Mejorar la guía de migración desde instalaciones históricas personalizadas.
- Mantener matrices de compatibilidad y avisos de nuevas versiones tecnológicas.
- Añadir orden visual optativo de carpetas sin modificar sus rutas.
- Incorporar una papelera privada y recuperable, con restauración y borrado definitivo.
- Preparar jQuery 4 y jQuery UI 1.14 en una fase separada, reemplazando primero las APIs retiradas sin romper jQuery 3.7.
- Eliminar gradualmente los XHR síncronos mediante flujos asíncronos probados, no mediante un cambio mecánico de bandera.

La propuesta de [organización por arrastre y papelera](file-organization-and-trash.md)
explica el alcance y las garantías que deben conservarse. El movimiento forma
parte de KCFinder 4.10; el orden visual y la papelera siguen siendo capacidades
futuras y desactivadas.

Las actualizaciones tecnológicas se trabajan junto con ciclos funcionales
relacionados, pero en cambios separados. Sass 1.101 se validó con el tema 0.4;
PHPUnit 13 y jQuery 4 todavía requieren pruebas específicas por tratarse de
saltos mayores.

El roadmap describe una dirección, no una promesa de fechas. Las prioridades se ajustan según seguridad, compatibilidad, uso real y contribuciones de la comunidad.

## Seguimiento

Los [issues del núcleo](https://github.com/krma-cl/kcfinder-Resurrected/issues) son el registro operativo. Un GitHub Project se incorporará cuando el volumen de iniciativas cruzadas justifique una vista adicional; por ahora, evitar esa capa mantiene el mantenimiento claro y liviano.
