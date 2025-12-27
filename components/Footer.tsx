import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Samuel Juan Pranoto. All rights reserved.
                    </p>
                    <div className={styles.socials}>
                        <a href="https://www.linkedin.com/in/samueljuan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:samueljuan@example.com">Email</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
