'use client'

import styles from './Certifications.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Certifications() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section id="certifications" className="section" aria-labelledby="certifications-title">
            <div className="container">
                <h2 id="certifications-title" className="section-title">Certifications</h2>
                <div
                    ref={ref}
                    className={`${styles.placeholder} glass animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    <p className={styles.text}>More certifications coming soon...</p>
                </div>
            </div>
        </section>
    )
}
