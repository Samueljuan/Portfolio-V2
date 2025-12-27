export type SiteConfig = {
    url: string
    name: string
    title: string
    description: string
    keywords: string[]
    ogImage: string
    favicon: string
    locale: string
    alternateLocale: string
}

export const siteConfig: SiteConfig = {
    url: 'https://portfolio-v2-inky-phi.vercel.app',
    name: 'Samuel Juan',
    title: 'Samuel Juan | Product Associate Portfolio | Technical Product Focus | Jakarta',
    description: 'Samuel Juan, Product Associate at Kick Avenue Jakarta. PRD writing, Figma, Playwright QA, Agile leadership. End-to-end delivery; open to freelance.',
    keywords: [
        'product associate jakarta',
        'technical product manager indonesia',
        'freelance product manager',
        'prd writing',
        'figma product design',
        'qa automation playwright',
        'agile product management'
    ],
    ogImage: 'https://via.placeholder.com/1200x630?text=Samuel+Juan+Product+Portfolio',
    favicon: '/favicon.ico',
    locale: 'en_US',
    alternateLocale: 'id_ID'
}
