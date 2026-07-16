# Orientación para trabajar en la documentación

Este repositorio es la fuente pública e integradora del ecosistema KCFinder Resurrected. La guía principal para nuevas instancias está en `docs/roadmap/maintainer-guide.md`.

## Línea base

- Sitio: <https://krma-cl.github.io/kcfinder-docs/>
- VitePress 1.6
- Node.js 22+
- Rama principal: `main`

## Responsabilidad y límites

- Documenta núcleo, Laravel, Symfony, tema, migración, seguridad y referencia sin copiar innecesariamente los README completos.
- Describe como estable sólo lo que ya esté publicado; marca claramente propuestas o trabajo experimental.
- Conserva español claro, ejemplos ejecutables y enlaces directos a los repositorios y paquetes oficiales.
- Respeta la identidad visual derivada de `krma-cl/krma-brand`, sin convertir la documentación técnica en publicidad.
- Cuando un cambio cruza repositorios, esta documentación es la fuente pública que explica cómo se combinan.

## Validación

```bash
npm ci
npm run check
```

Para cambios visuales o de navegación, comprueba además el sitio renderizado en escritorio y móvil.

## Flujo

- Usa ramas `krma/<descripcion>`.
- Actualiza navegación y sidebar cuando agregues una sección canónica.
- GitHub Pages se despliega desde `main`; confirma el workflow después de publicar.
- Mantén actualizada la tabla de versiones de `docs/roadmap/maintainer-guide.md` cuando haya releases relevantes.
