export const SITE = {
  title: 'Rabbit Form Validation Library',
  description: 'Your website description.',
  defaultLanguage: 'es-mx'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}

export const KNOWN_LANGUAGES = {
  //Deutsch: 'de',
  English: 'en',
  Español: 'es'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/advanced-astro/astro-docs-template/tree/main`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX'
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  // de: {
  //   Überschrift: [
  //     { text: 'Einführung', link: 'de/introduction' },
  //     { text: 'Seite 2', link: 'de/page-2' },
  //     { text: 'Seite 3', link: 'de/page-3' }
  //   ],
  //   'Ein weiterer Abschnitt': [{ text: 'Seite 4', link: 'de/page-4' }]
  // },
  en: {
    'Sections': [
      { text: 'Introduction', link: 'en/introduction' },
      { text: 'Initialization', link: 'en/initialization' },
      { text: 'Page 3', link: 'en/page-3' }
    ],
    'Another Section': [{ text: 'Page 4', link: 'en/page-4' }]
  },
  es: {
    'Secciones': [
      { text: 'Introduccion', link: 'es/introduccion' },
      { text: 'Inicialización', link: 'es/inicializacion' }
    ],
    'Validaciones': [
      { text: 'Validación con Atributos data-rabbit', link: 'es/validaciones' },
      { text: 'Validaciones para Inputs de Tipo Texto', link: 'es/validaciones/inputs-de-tipo-texto' },
      { text: 'Validaciones para Inputs de Tipo Checkbox', link: 'es/validaciones/inputs-de-tipo-checkbox' }
    ],
    'Limitaciones': [
      { text: 'Limitaciones y como colaborar', link: 'es/limitaciones' }
    ]
  }
}
