export type SiteConfig = {
    url: string
    name: string
    title: string
    description: string
    keywords: string[]
    ogImage: string
    locale: string
    alternateLocale: string
}

export const siteConfig: SiteConfig = {
    url: 'https://samueljuan.vercel.app',
    name: 'Samuel Juan',
    title: 'Samuel Juan | Product Associate Portfolio | Technical Product Focus | Jakarta',
    description: 'Portfolio Samuel Juan, Product Associate at Kick Avenue Jakarta. Technical focus: PRD, Figma, Playwright QA, Agile leadership, end-to-end delivery.',
    keywords: [
        'samuel juan',
        'portfolio product associate',
        'product associate jakarta',
        'technical product manager indonesia',
        'technical product associate',
        'freelance product manager',
        'prd writing',
        'figma product design',
        'qa automation playwright',
        'agile product management'
    ],
    ogImage: '/og-image.svg',
    locale: 'id_ID',
    alternateLocale: 'en_US'
}
