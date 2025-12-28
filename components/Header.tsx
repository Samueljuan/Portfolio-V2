'use client'

import { useEffect, useState } from 'react'
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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800) {
                setIsMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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
