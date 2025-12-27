import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { profile } from '@/data/portfolio'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: profile.tabTitle,
  description: 'Product Associate at Kick Avenue with a technical focus on PRD, Figma, QA automation, and Agile delivery.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var localTheme = localStorage.getItem('theme');
                  if (localTheme) document.documentElement.setAttribute('data-theme', localTheme);
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
