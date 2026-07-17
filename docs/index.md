---
layout: home
title: Inicio
description: Documentación oficial de KCFinder Resurrected y sus integraciones para PHP, Laravel y Symfony.
sidebar: false
outline: false
---

<main class="kf-home">
  <section class="kf-hero">
    <div class="kf-hero-copy">
      <h1>Archivos bajo control. Integración sin fricción.</h1>
      <p>Un administrador de archivos mantenido, seguro y preparado para PHP moderno, sin perder su despliegue ligero.</p>
      <div class="kf-actions">
        <a class="kf-button-primary" href="./guide/">Comenzar →</a>
        <a class="kf-button-secondary" href="https://github.com/krma-cl/kcfinder-Resurrected">Ver en GitHub ↗</a>
      </div>
    </div>
    <figure class="kf-product-shot">
      <img src="/kcfinder-bootstrap5-interface.png" alt="Interfaz real de KCFinder Resurrected con el tema Bootstrap 5: árbol de carpetas, barra de acciones, opciones de visualización y selector de idioma." />
      <figcaption>Interfaz real del tema Bootstrap 5</figcaption>
    </figure>
  </section>

  <section class="kf-release">
    <div>
      <span class="kf-release-label">Novedad · KCFinder 4.9 + tema 0.3.1</span>
      <h2>Temas Composer sin modificar vendor.</h2>
      <p>Standalone, Laravel y Symfony pueden instalar o montar el tema Bootstrap 5 desde su paquete independiente, conservando el núcleo ligero.</p>
    </div>
    <a href="./themes/bootstrap5">Ver instalación del tema →</a>
  </section>

  <section class="kf-pathways">
    <h2 class="kf-section-heading">Elige cómo integrarlo</h2>
    <div class="kf-pathway-list">
      <a class="kf-pathway" href="./guide/standalone">
        <span class="kf-pathway-number">1</span>
        <span><h3>Standalone PHP</h3><p>Despliegue tradicional mediante ZIP, sin exigir Composer, Node.js ni un framework.</p><span>Ver guía de inicio →</span></span>
      </a>
      <a class="kf-pathway" href="./guide/laravel">
        <span class="kf-pathway-number">2</span>
        <span><h3>Laravel</h3><p>Storage, Gates y eventos conectados al selector moderno mediante Composer.</p><span>Ver integración →</span></span>
      </a>
      <a class="kf-pathway" href="./guide/symfony">
        <span class="kf-pathway-number">3</span>
        <span><h3>Symfony</h3><p>Servicios, Voters, eventos y almacenamiento Flysystem para Symfony.</p><span>Ver integración →</span></span>
      </a>
    </div>
  </section>

  <section class="kf-ecosystem">
    <div>
      <h2>Un ecosistema, una base sólida</h2>
      <p>El núcleo PHP permanece independiente. Los adaptadores y el tema se versionan por separado para que cada instalación adopte sólo lo que necesita.</p>
      <a href="./reference/">Conocer todos los componentes →</a>
    </div>
    <div class="kf-ecosystem-map" aria-label="Componentes oficiales de KCFinder">
      <div class="kf-component core"><strong>Núcleo</strong><small>Aplicación PHP independiente y contratos modernos.</small></div>
      <div class="kf-component theme"><strong>Tema Bootstrap 5</strong><small>Interfaz responsiva opcional, sin CDN.</small></div>
      <div class="kf-adapters">
        <div class="kf-component"><strong>Adaptador Laravel</strong><small>Storage, Gates y eventos.</small></div>
        <div class="kf-component"><strong>Bundle Symfony</strong><small>Flysystem, Voters y servicios.</small></div>
      </div>
    </div>
  </section>

  <section class="kf-security">
    <div class="kf-security-inner">
      <div><h2>Seguro por diseño</h2><p>Defensas en cada capa del flujo de archivos.</p></div>
      <div class="kf-check">Validación estricta de tipos y extensiones</div>
      <div class="kf-check">Protección CSRF y sesiones seguras</div>
      <div class="kf-check">Autorización antes del almacenamiento</div>
      <div class="kf-check">Uploads sin ejecución de scripts</div>
    </div>
  </section>

  <section class="kf-maintainer">
    <span>KCFinder Resurrected es software libre mantenido junto con su comunidad.</span>
    <span><img src="/krma-wordmark.svg" alt="KRMA" /> <a href="https://krma.cl">Mantenido por KRMA ↗</a></span>
  </section>
</main>
