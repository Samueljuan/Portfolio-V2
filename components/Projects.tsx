'use client'

import styles from './Projects.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Projects() {
    const { ref, isVisible } = useScrollAnimation()

    const projects = [
        {
            title: "Platform Revamp at Kick Avenue",
            role: "Product Associate",
            duration: "2024 - Present",
            description: "Problem: legacy platform workflows slowed delivery. Approach: authored PRDs, mapped user flows in Figma, and aligned APIs with engineering. Solution: redesigned flows and automated QA coverage. Impact: accelerated sprint delivery and improved release confidence.",
            achievements: [
                "Delivered 15+ PRDs with clear requirements and acceptance criteria.",
                "Reached 90% sprint completion on reward system improvements.",
                "Built 100+ Playwright tests and 500+ manual cases for critical flows."
            ],
            highlight: true
        },
        {
            title: "Automation at KarirLab",
            role: "Customer Success & Automation",
            duration: "2023 - 2024",
            description: "Automated WhatsApp broadcast workflows to streamline employer communications and reduce manual overhead.",
            achievements: [
                "Achieved 96% efficiency improvement with Selenium automation.",
                "Sustained 95% customer satisfaction during process changes.",
                "Built a lightweight dashboard to track engagement KPIs."
            ]
        },
        {
            title: "Glints Academy Full-Stack Projects",
            role: "Full-Stack Participant",
            duration: "2021",
            description: "Delivered product-ready web apps with end-to-end feature flows. Built responsive front-end with React.js and integrated APIs for real-world use cases.",
            achievements: [
                "Shipped multiple React.js apps with clean UI and state management.",
                "Integrated REST APIs for authentication and data CRUD flows.",
                "Documented product requirements and demoed working MVPs."
            ]
        },
        {
            title: "Community Leadership at MSIB",
            role: "Communication & Community Engagement",
            duration: "2021 - 2022",
            description: "Scaled communications for a national program and supported community activation events.",
            achievements: [
                "Reached 65k+ students and 250 partner representatives.",
                "Coordinated a festival with 25+ partners across cohorts.",
                "Streamlined program communications and community support."
            ]
        }
    ]

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Case Studies</h2>
                <div
                    ref={ref}
                    className={styles.grid}
                >
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`${styles.card} glass animate-on-scroll ${isVisible ? 'is-visible' : ''} ${project.highlight ? styles.highlightCard : ''}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className={styles.body}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <div className={styles.meta}>
                                    <span className={styles.role}>{project.role}</span>
                                    <span className={styles.duration}>{project.duration}</span>
                                </div>
                                <p className={styles.description}>{project.description}</p>
                                <ul className={styles.achievements}>
                                    {project.achievements.map((achievement) => (
                                        <li key={achievement} className={styles.achievementItem}>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
