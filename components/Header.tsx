'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import styles from './Header.module.css'
import { profile } from '@/data/portfolio'

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Case Studies' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800) {
                setIsMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (!isMenuOpen) {
            return
        }
        const menu = menuRef.current
        if (!menu) {
            return
        }
        const focusable = Array.from(
            menu.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])')
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        first?.focus()

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false)
                return
            }
            if (event.key !== 'Tab' || focusable.length === 0) {
                return
            }
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault()
                last?.focus()
                return
            }
            if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault()
                first?.focus()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isMenuOpen])

    const handleToggle = () => setIsMenuOpen((prev) => !prev)
    const handleClose = () => setIsMenuOpen(false)

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo} aria-label="Go to homepage">
                    {profile.shortName}
                </Link>
                <div className={styles.right}>
                    <nav className={styles.nav} aria-label="Primary">
                        {navLinks.map((item) => (
                            <Link key={item.href} href={item.href} className={styles.link}>
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className={styles.actions}>
                        <ThemeToggle />
                        <button
                            type="button"
                            className={styles.menuButton}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            onClick={handleToggle}
                        >
                            <span className={styles.menuIcon} aria-hidden="true">
                                <span className={styles.menuLine} />
                                <span className={styles.menuLine} />
                                <span className={styles.menuLine} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div
                id="mobile-menu"
                ref={menuRef}
                className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
                aria-hidden={!isMenuOpen}
            >
                <div className={styles.mobileLinks}>
                    {navLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={styles.mobileLink}
                            onClick={handleClose}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
            <button
                type="button"
                className={`${styles.backdrop} ${isMenuOpen ? styles.backdropOpen : ''}`}
                aria-hidden={!isMenuOpen}
                tabIndex={-1}
                onClick={handleClose}
            />
        </header>
    )
}
