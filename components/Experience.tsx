'use client'

import styles from './Experience.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { experiences } from '@/data/portfolio'

export default function Experience() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div
                    ref={ref}
                    className={styles.timeline}
                >
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.company}
                            className={`${styles.item} glass animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className={styles.header}>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <span className={styles.company}>{exp.company}</span>
                            </div>
                            <span className={styles.period}>{exp.period}</span>
                            <ul className={styles.bullets}>
                                {exp.highlights.map((highlight) => (
                                    <li key={highlight} className={styles.bulletItem}>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
