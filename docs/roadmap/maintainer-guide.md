---
title: Guía para mantenedores e instancias de trabajo
description: Mapa operativo del ecosistema KCFinder Resurrected para coordinar cambios entre repositorios.
---

# Guía para mantenedores e instancias de trabajo

Esta es la orientación canónica para personas y asistentes que trabajen en el ecosistema KCFinder Resurrected. Su objetivo es permitir que una tarea comience en el repositorio correcto, respete los límites de arquitectura y termine con pruebas y documentación suficientes.

> Línea base verificada el 16 de julio de 2026. Las versiones publicadas pueden avanzar; comprueba tags, Packagist y los archivos de dependencias antes de modificar código.

## Propósito común

KCFinder Resurrected es una continuación mantenida, orientada a seguridad y preparada para producción de KCFinder. Debe conservar su núcleo independiente, su instalación tradicional y su despliegue ligero, a la vez que ofrece contratos modernos, integración con frameworks y una interfaz opcional actualizada.

No es una reescritura en Laravel o Symfony. Composer, Node.js y Docker son herramientas o canales opcionales; una instalación PHP tradicional debe continuar siendo posible.

## Mapa del ecosistema

| Repositorio | Responsabilidad | Distribución | Línea base |
| --- | --- | --- | --- |
| [`kcfinder-Resurrected`](https://github.com/krma-cl/kcfinder-Resurrected) | Núcleo, navegador clásico, contratos públicos, selector, ZIP tradicional | `krma-cl/kcfinder` y GitHub Releases | `v4.6.0`, PHP 8.2–8.5 |
| [`kcfinder-laravel`](https://github.com/krma-cl/kcfinder-laravel) | Integración con Laravel, URLs, autorización, resultados y eventos | `krma-cl/kcfinder-laravel` | `v1.2.1`, Laravel 12–13 |
| [`kcfinder-symfony-bundle`](https://github.com/krma-cl/kcfinder-symfony-bundle) | Bundle Symfony, Security, eventos y Flysystem | `krma-cl/kcfinder-symfony-bundle` | `v1.0.0`, Symfony 7.4–8 |
| [`kcfinder-bootstrap5-theme`](https://github.com/krma-cl/kcfinder-bootstrap5-theme) | Tema visual Bootstrap 5, iconos y comportamiento responsivo del tema | paquete instalable en GitHub Releases | `v0.1.0`, Bootstrap 5.3.8 |
| [`kcfinder-docs`](https://github.com/krma-cl/kcfinder-docs) | Documentación pública integradora y GitHub Pages | [sitio de documentación](https://krma-cl.github.io/kcfinder-docs/) | VitePress 1.6, Node 22+ |

Cada repositorio tiene versiones y releases independientes. Una mejora visual no obliga a publicar el núcleo; una integración Laravel no debe introducir dependencias de Laravel en él.

## Límites que no deben cruzarse

### Núcleo

- No depende de Laravel, Symfony, Bootstrap, Node.js ni Docker en producción.
- Conserva el protocolo y los callbacks históricos salvo que el cambio sea optativo o se programe para una versión mayor.
- Resuelve en el servidor rutas, permisos, MIME, tamaño y URLs finales.
- Expone contratos neutrales. Desde `4.6`, `OperationObserverInterface` permite observar operaciones exitosas sin acoplar el navegador clásico a un framework.
- Un fallo de telemetría o de un listener no debe convertir una mutación de archivos ya completada en un falso fallo.

### Adaptadores

- Traducen los contratos del núcleo a convenciones del framework.
- Autenticación, URLs firmadas, discos, eventos y contenedores de servicios pertenecen aquí.
- No deben mantener una copia modificada del navegador clásico.
- En Laravel, el puente automático requiere que la aplicación ya esté inicializada. Nunca se debe arrancar Laravel una segunda vez desde `conf/config.local.php`.
- No se debe combinar el puente automático con llamadas manuales `report*` para una misma operación, porque duplicaría eventos.

### Tema

- Contiene presentación, iconografía y ajustes responsivos que puedan resolverse sin alterar reglas de archivos.
- No cambia autenticación, uploads, permisos ni configuración de seguridad.
- Se modifica en `src` y se reconstruye `dist/bootstrap5`; no se edita solamente el artefacto generado.
- Bootstrap y Bootstrap Icons se distribuyen localmente. El funcionamiento no depende de un CDN.

### Documentación

- Es la fuente pública para explicar cómo se combinan los componentes.
- Debe documentar únicamente funciones ya publicadas o marcar claramente lo experimental.
- Un cambio público en otro repositorio debe actualizar aquí la guía correspondiente.

## Cómo decidir dónde trabajar

| Si la tarea trata de... | Trabaja primero en... |
| --- | --- |
| filesystem, uploads, AJAX, CSRF, sesiones, miniaturas, selector o contratos neutrales | núcleo |
| Laravel Storage, Gates, URLs públicas o firmadas, eventos Laravel | adaptador Laravel |
| Symfony Security, servicios, eventos o Flysystem en Symfony | bundle Symfony |
| estilos, iconos, controles visuales, panel móvil o accesibilidad del tema | tema Bootstrap 5 |
| instalación, ejemplos, migración, referencia o coordinación entre repositorios | documentación |

Si un cambio necesita dos repositorios, estabiliza primero el contrato neutral del núcleo, publícalo y luego actualiza el adaptador con una restricción de versión explícita. Evita commits coordinados que sólo funcionen usando ramas no publicadas.

## Estado técnico relevante

### Operaciones y eventos

El navegador clásico del núcleo puede informar uploads, edición o recorte, movimiento, renombrado, eliminación y creación de directorios mediante el observador neutral. El adaptador Laravel `1.2.1` implementa ese contrato con `ClassicBrowserBridge` y emite eventos nativos.

Para Laravel integrado:

```php
use KCFinder\Contract\OperationObserverInterface;

$_LOCALS['_operationObserver'] = app(OperationObserverInterface::class);
```

Esto sólo es válido cuando `browse.php` ya se ejecuta dentro del bootstrap autenticado de Laravel. Los endpoints personalizados pueden seguir utilizando resultados estructurados y métodos `report*`.

### Selector moderno

El descriptor estable contiene `name`, `path`, `url`, `mime` y `size`. Las rutas son lógicas, no rutas físicas del servidor. El protocolo moderno es optativo y convive con los callbacks históricos.

### Trabajo de UX

Las mejoras de selección táctil, acciones visibles, teclado, barra de confirmación y simplificación del modo selector se planifican por separado. No deben mezclarse incidentalmente con cambios de eventos, almacenamiento o releases de adaptadores.

## Protocolo para iniciar una tarea

1. Lee el `AGENTS.md` de la raíz del repositorio.
2. Comprueba `git status`, rama, remotos, último tag y dependencias declaradas.
3. Lee la arquitectura o README específico señalado por `AGENTS.md`.
4. Confirma si el comportamiento es heredado, optativo o parte de una API pública.
5. Implementa el cambio mínimo en el repositorio responsable.
6. Agrega pruebas proporcionales al riesgo y conserva compatibilidad.
7. Ejecuta la validación completa del repositorio.
8. Actualiza README, changelog y esta documentación si cambia una superficie pública.
9. Usa ramas `krma/<descripcion>` para trabajo normal. No reescribas tags ni historial publicado.
10. Deja un resumen con archivos, pruebas, compatibilidad, release necesario y cualquier tarea cruzada pendiente.

En el clon local histórico del núcleo, el remoto de KRMA puede llamarse `fork` y `origin` puede apuntar a `DevCrh/kcfinder-Resurrected`. Verifica siempre el destino antes de empujar.

## Validación por repositorio

### Núcleo

```bash
composer validate --strict
composer test
composer package
```

La CI cubre PHP 8.2, 8.3, 8.4 y 8.5. No ocultes warnings ni deprecations para aprobar pruebas. El script `tools/check-upstream-versions.ps1` revisa semanalmente las versiones de las tecnologías relacionadas sin actualizarlas automáticamente.

### Laravel y Symfony

```bash
composer install
composer check
```

Prueba además una instalación limpia de Composer cuando cambien restricciones del núcleo o del framework.

### Tema

```bash
npm ci
npm run check
git diff --exit-code -- dist/bootstrap5
```

La última comprobación garantiza que el paquete distribuible corresponde al código fuente.

### Documentación

```bash
npm ci
npm run check
```

Comprueba enlaces, navegación y apariencia cuando se modifique la estructura del sitio.

## Releases

- Usa SemVer y nunca reemplaces un tag ya publicado.
- En el núcleo, un tag `v*` activa el workflow que valida y construye el ZIP reproducible y el GitHub Release.
- Packagist descubre los tags del núcleo y de los adaptadores; verifica que tag, commit y versión visible coincidan antes de anunciar.
- El tema publica su `dist/bootstrap5` y mantiene su ciclo independiente.
- La documentación se despliega en GitHub Pages desde `main`.
- Una corrección posterior a un release requiere una versión nueva; no alteres artefactos existentes.

## Criterio de término

Una tarea no está terminada sólo porque el código compile. El traspaso debe indicar:

- comportamiento corregido o agregado;
- compatibilidad y protocolo heredado preservados;
- pruebas y comandos ejecutados;
- documentación actualizada;
- repositorio y rama publicados;
- si requiere un nuevo tag o una actualización dependiente en otro repositorio.

Para decisiones estructurales nuevas, actualiza primero la arquitectura o agrega un ADR en el núcleo. Para coordinación diaria, los issues siguen siendo la fuente operativa; un GitHub Project sólo se justifica cuando el volumen de iniciativas cruzadas haga insuficiente esa vista.
