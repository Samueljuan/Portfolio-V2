'use client'

import styles from './Contact.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Contact() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section id="contact" className="section">
            <div className="container">
                <div
                    ref={ref}
                    className={`${styles.content} glass animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className={styles.text}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>
                    <div className={styles.actions}>
                        <a href="mailto:samueljuan@example.com" className="btn btn-primary">
                            Say Hello
                        </a>
                        <a
                            href="https://www.linkedin.com/in/samueljuan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnOutline}
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
