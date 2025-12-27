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
            highlights: [
                "Owned 15+ PRDs with clear requirements, user flows, and acceptance criteria.",
                "Built Figma wireframes and aligned stakeholders with engineering on scope and APIs.",
                "Acted as the technical bridge between product, engineering, and QA teams.",
                "Shipped reward system improvements with 90% sprint completion rate.",
                "Delivered 100+ Playwright automated tests and 500+ manual test cases."
            ]
        },
        {
            company: "KarirLab",
            role: "Customer Success & Automation",
            period: "Feb 2023 - Jun 2024",
            highlights: [
                "Maintained 95% customer satisfaction through feedback loops and proactive support.",
                "Automated WhatsApp blast workflows with Selenium for 96% efficiency gains.",
                "Built an internal dashboard to monitor engagement and operational KPIs."
            ]
        },
        {
            company: "MSIB Kampus Merdeka",
            role: "Communication & Community Engagement",
            period: "Nov 2021 - Dec 2022",
            highlights: [
                "Supported communications for 65k+ students across program cohorts.",
                "Coordinated engagement with 250 partner representatives.",
                "Led community initiatives and large-scale coordination efforts."
            ]
        }
    ]

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
