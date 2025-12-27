'use client'

import styles from './Contact.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { profile } from '@/data/portfolio'

export default function Contact() {
    const { ref, isVisible } = useScrollAnimation()
    const { email, linkedInUrl, name } = profile

    return (
        <section id="contact" className="section" aria-labelledby="contact-title">
            <div className="container">
                <div
                    ref={ref}
                    className={`${styles.content} glass animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    <h2 id="contact-title" className="section-title">Get In Touch</h2>
                    <p className={styles.text}>
                        Open to opportunities in Technical Product Management and Product Leadership roles in Jakarta/remote.
                        Feel free to reach out for collaboration, product roles, or a quick conversation.
                    </p>
                    <p className={styles.details}>
                        Email: <a href={`mailto:${email}`} aria-label={`Email ${name}`}>{email}</a> |{" "}
                        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`}>
                            LinkedIn
                        </a>
                    </p>
                    <div className={styles.actions}>
                        <a href={`mailto:${email}`} className="btn btn-primary" aria-label={`Email ${name}`}>
                            Email Me
                        </a>
                        <a
                            href={linkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${name} on LinkedIn`}
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
