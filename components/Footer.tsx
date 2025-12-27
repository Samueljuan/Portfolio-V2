import styles from './Footer.module.css'

export default function Footer() {
    const email = "samueljuan@example.com"
    const linkedInUrl = "https://www.linkedin.com/in/samueljuan/"

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Samuel Juan Pranoto. All rights reserved.
                    </p>
                    <div className={styles.socials}>
                        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href={`mailto:${email}`}>Email</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
