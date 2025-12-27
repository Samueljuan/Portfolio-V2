import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import styles from './Header.module.css'
import { profile } from '@/data/portfolio'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    {profile.shortName}
                </Link>
                <nav className={styles.nav}>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#experience" className={styles.link}>Experience</Link>
                    <Link href="#projects" className={styles.link}>Case Studies</Link>
                    <Link href="#skills" className={styles.link}>Skills</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    )
}
