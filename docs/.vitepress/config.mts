import { defineConfig } from 'vitepress'

const repository = 'https://github.com/krma-cl/kcfinder-docs'

export default defineConfig({
  lang: 'es-CL',
  title: 'KCFinder Resurrected',
  description: 'Documentación oficial del ecosistema KCFinder mantenido por KRMA.',
  base: '/kcfinder-docs/',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://krma-cl.github.io/kcfinder-docs/'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/kcfinder-docs/kcfinder-mark.svg' }],
    ['meta', { name: 'theme-color', content: '#0E1524' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'es_CL' }],
    ['meta', { property: 'og:site_name', content: 'KCFinder Resurrected' }]
  ],
  themeConfig: {
    logo: '/kcfinder-mark.svg',
    siteTitle: 'KCFinder Resurrected',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Buscar en la documentación',
            buttonAriaLabel: 'Buscar en la documentación'
          },
          modal: {
            noResultsText: 'No se encontraron resultados para',
            resetButtonTitle: 'Limpiar búsqueda',
            footer: {
              selectText: 'seleccionar',
              navigateText: 'navegar',
              closeText: 'cerrar'
            }
          }
        }
      }
    },
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Guía de inicio', link: '/guide/' },
      { text: 'Configuración', link: '/configuration/' },
      { text: 'Seguridad', link: '/security/' },
      { text: 'Integraciones', link: '/integrations/' },
      {
        text: 'Más',
        items: [
          { text: 'Temas', link: '/themes/' },
          { text: 'Migración', link: '/migration/' },
          { text: 'Referencia', link: '/reference/' },
          { text: 'Roadmap', link: '/roadmap/' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guía de inicio',
          items: [
            { text: 'Elegir una instalación', link: '/guide/' },
            { text: 'Standalone PHP', link: '/guide/standalone' },
            { text: 'Laravel', link: '/guide/laravel' },
            { text: 'Symfony', link: '/guide/symfony' }
          ]
        }
      ],
      '/configuration/': [
        {
          text: 'Configuración',
          items: [
            { text: 'Visión general', link: '/configuration/' },
            { text: 'Búsqueda', link: '/configuration/search' },
            { text: 'Uploads y URLs', link: '/configuration/storage' },
            { text: 'Imágenes y miniaturas', link: '/configuration/images' }
          ]
        }
      ],
      '/security/': [
        {
          text: 'Seguridad',
          items: [
            { text: 'Despliegue seguro', link: '/security/' },
            { text: 'Checklist de producción', link: '/security/production-checklist' }
          ]
        }
      ],
      '/integrations/': [
        {
          text: 'Integraciones',
          items: [
            { text: 'Visión general', link: '/integrations/' },
            { text: 'Selector JSON', link: '/integrations/selector-json' },
            { text: 'Eventos de operaciones', link: '/integrations/operation-events' },
            { text: 'CKEditor y TinyMCE', link: '/integrations/editors' }
          ]
        }
      ],
      '/themes/': [
        {
          text: 'Temas',
          items: [
            { text: 'Sistema de temas', link: '/themes/' },
            { text: 'Bootstrap 5', link: '/themes/bootstrap5' }
          ]
        }
      ],
      '/migration/': [
        {
          text: 'Migración',
          items: [
            { text: 'Desde KCFinder original', link: '/migration/' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Referencia',
          items: [
            { text: 'Ecosistema y compatibilidad', link: '/reference/' },
            { text: 'Configuración', link: '/reference/configuration' },
            { text: 'Descriptor de archivo', link: '/reference/file-descriptor' }
          ]
        }
      ],
      '/roadmap/': [
        {
          text: 'Proyecto',
          items: [
            { text: 'Roadmap', link: '/roadmap/' },
            { text: 'Contribuir', link: '/roadmap/contributing' }
          ]
        }
      ]
    },
    outline: {
      label: 'En esta página',
      level: [2, 3]
    },
    docFooter: {
      prev: 'Artículo anterior',
      next: 'Artículo siguiente'
    },
    darkModeSwitchLabel: 'Apariencia',
    lightModeSwitchTitle: 'Usar tema claro',
    darkModeSwitchTitle: 'Usar tema oscuro',
    sidebarMenuLabel: 'Menú',
    returnToTopLabel: 'Volver arriba',
    lastUpdated: {
      text: 'Última actualización',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short'
      }
    },
    editLink: {
      pattern: `${repository}/edit/main/docs/:path`,
      text: 'Editar esta página en GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/krma-cl/kcfinder-Resurrected' }
    ],
    footer: {
      message: 'KCFinder Resurrected preserva el linaje del proyecto original y continúa su desarrollo abierto.',
      copyright: 'Mantenido por KRMA junto con la comunidad.'
    }
  }
})
