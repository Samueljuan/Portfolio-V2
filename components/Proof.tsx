'use client'

import styles from './Proof.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { proofLogos, proofMetrics } from '@/data/portfolio'

export default function Proof() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section id="proof" className={`section ${styles.section}`} aria-labelledby="proof-title">
            <div className="container">
                <h2 id="proof-title" className="section-title">Proof</h2>
                <div
                    ref={ref}
                    className={`${styles.grid} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    {proofMetrics.map((metric) => (
                        <div key={metric.label} className={`${styles.card} glass`}>
                            <span className={styles.value}>{metric.value}</span>
                            <span className={styles.label}>{metric.label}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.logos} aria-label="Affiliations">
                    {proofLogos.map((logo) => (
                        <div key={logo.name} className={styles.logoItem}>
                            <img src={logo.src} alt={`${logo.name} logo`} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
