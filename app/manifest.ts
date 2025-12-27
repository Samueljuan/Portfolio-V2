import type { MetadataRoute } from 'next'
import { siteConfig } from '@/data/site'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${siteConfig.name} Portfolio`,
        short_name: siteConfig.name,
        description: siteConfig.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#f8fafc',
        theme_color: '#8b5cf6',
    icons: [
        {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
        },
        {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
        },
    ],
}
}
