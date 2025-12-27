'use client'

import styles from './Experience.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Experience() {
    const { ref, isVisible } = useScrollAnimation()

    const experiences = [
        {
            company: "Kick Avenue",
            role: "Product Associate",
            period: "Jul 2024 - Present",
            description: "Managing product lifecycle and cross-functional collaboration. Designing and implementing automation using Playwright to enhance product quality."
        },
        {
            company: "KarirLab",
            role: "Customer Success",
            period: "Feb 2023 - Jun 2024",
            description: "Ensured customer satisfaction and success with the platform. Managed relationships and user feedback to drive product improvements."
        },
        {
            company: "Kampus Merdeka",
            role: "Communication and Community Technology Engagement",
            period: "Nov 2021 - Dec 2022",
            description: "Led community engagement initiatives and facilitated technology adoption within the ecosystem."
        }
    ]

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div
                    ref={ref}
                    className={`${styles.timeline} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`${styles.item} glass`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className={styles.header}>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <span className={styles.company}>{exp.company}</span>
                            </div>
                            <span className={styles.period}>{exp.period}</span>
                            <p className={styles.description}>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
