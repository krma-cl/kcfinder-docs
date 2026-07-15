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
    <div class="kf-browser" aria-label="Vista conceptual del selector de archivos KCFinder">
      <div class="kf-browser-toolbar">
        <strong>+</strong>
        <span>Subir</span>
        <span>Nueva carpeta</span>
        <span>Actualizar</span>
        <span class="kf-browser-search">Buscar archivos…</span>
      </div>
      <div class="kf-browser-body">
        <div class="kf-browser-tree">
          <b>Carpetas</b>
          <div class="kf-tree-item">▾ public</div>
          <div class="kf-tree-item selected">&nbsp;&nbsp;▾ images</div>
          <div class="kf-tree-item">&nbsp;&nbsp;&nbsp;&nbsp;avatars</div>
          <div class="kf-tree-item">&nbsp;&nbsp;&nbsp;&nbsp;logos</div>
          <div class="kf-tree-item">▸ documents</div>
          <div class="kf-tree-item">▸ uploads</div>
        </div>
        <div class="kf-browser-list">
          <b>Nombre</b>
          <div class="kf-file-row selected"><span>✓</span><strong>hero.jpg</strong><span>142 KB</span></div>
          <div class="kf-file-row"><span>□</span><span>logo.svg</span><span>18 KB</span></div>
          <div class="kf-file-row"><span>□</span><span>banner.png</span><span>312 KB</span></div>
          <div class="kf-file-row"><span>□</span><span>document.pdf</span><span>1.2 MB</span></div>
          <div class="kf-file-row"><span>□</span><span>notes.txt</span><span>1 KB</span></div>
        </div>
        <div class="kf-browser-json">
          <b>Selector JSON</b>
          <pre><code>&#123;<br>&nbsp;&nbsp;&quot;name&quot;: &quot;hero.jpg&quot;,<br>&nbsp;&nbsp;&quot;path&quot;: &quot;/images/hero.jpg&quot;,<br>&nbsp;&nbsp;&quot;url&quot;: &quot;/storage/images/hero.jpg&quot;,<br>&nbsp;&nbsp;&quot;mime&quot;: &quot;image/jpeg&quot;,<br>&nbsp;&nbsp;&quot;size&quot;: 145408<br>&#125;</code></pre>
        </div>
      </div>
    </div>
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
