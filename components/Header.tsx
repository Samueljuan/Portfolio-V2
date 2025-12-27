import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Samuel Juan
                </Link>
                <nav className={styles.nav}>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#experience" className={styles.link}>Experience</Link>
                    <Link href="#projects" className={styles.link}>Projects</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    )
}
