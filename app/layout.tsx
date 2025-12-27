import './globals.css'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://portfolio-v2-inky-phi.vercel.app'
const metaTitle = 'Samuel Juan | Product Associate Portfolio | Technical Product Focus | Jakarta'
const metaDescription = 'Samuel Juan, Product Associate at Kick Avenue Jakarta. PRD writing, Figma, Playwright QA, Agile leadership. End-to-end delivery; open to freelance.'
const metaKeywords = 'product associate jakarta, technical product manager indonesia, freelance product manager, prd writing, figma product design, qa automation playwright, agile product management'
const ogImage = 'https://via.placeholder.com/1200x630?text=Samuel+Juan+Product+Portfolio'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: metaTitle,
  description: metaDescription,
  keywords: metaKeywords,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Samuel Juan | Product Associate Portfolio Jakarta',
    description: metaDescription,
    url: siteUrl,
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Samuel Juan Product Portfolio',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['id_ID'],
  },
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDescription,
    images: [ogImage],
  },
  icons: {
    icon: 'https://via.placeholder.com/64?text=S',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Samuel Juan',
    jobTitle: 'Product Associate',
    worksFor: {
      '@type': 'Organization',
      name: 'Kick Avenue',
    },
    url: siteUrl,
    sameAs: [
      'https://www.linkedin.com/in/samueljuan/',
      'https://github.com/username-kamu',
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = localStorage.getItem('theme');
                  document.documentElement.setAttribute('data-theme', localTheme || 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
