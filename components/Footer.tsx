import styles from './Footer.module.css'
import { profile } from '@/data/portfolio'

export default function Footer() {
    const { email, linkedInUrl, name } = profile

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} {name}. All rights reserved.
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
