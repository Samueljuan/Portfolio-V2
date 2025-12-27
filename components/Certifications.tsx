'use client'

import styles from './Certifications.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Certifications() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section id="certifications" className="section">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
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
