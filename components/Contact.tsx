'use client'

import styles from './Contact.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { profile } from '@/data/portfolio'

export default function Contact() {
    const { ref, isVisible } = useScrollAnimation()
    const { email, linkedInUrl } = profile

    return (
        <section id="contact" className="section">
            <div className="container">
                <div
                    ref={ref}
                    className={`${styles.content} glass animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className={styles.text}>
                        Open to Product opportunities in Jakarta/remote. Feel free to reach out for collaboration,
                        product roles, or a quick conversation.
                    </p>
                    <p className={styles.details}>
                        Email: <a href={`mailto:${email}`}>{email}</a> |{" "}
                        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </p>
                    <div className={styles.actions}>
                        <a href={`mailto:${email}`} className="btn btn-primary">
                            Email Me
                        </a>
                        <a
                            href={linkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnOutline}
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
