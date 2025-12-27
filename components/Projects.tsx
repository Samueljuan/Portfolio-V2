'use client'

import styles from './Projects.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Projects() {
    const { ref, isVisible } = useScrollAnimation()

    const projects = [
        {
            title: "WhatsApp Group Blast",
            tech: "Python • Automation",
            description: "Automated tool for broadcasting messages to multiple WhatsApp groups, streamlining team communication and content distribution."
        },
        {
            title: "KarirLab Outing",
            tech: "Leadership • Event Management",
            description: "Vice Chairperson for company outing. Led cross-functional teams to design and execute engaging activities, boosting team morale."
        },
        {
            title: "Festival Kampus Merdeka",
            tech: "Community • Event Coordination",
            description: "Coordinated the MSIB Fair, attracting 25+ partners and promoting internship opportunities to thousands of students."
        }
    ]

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div
                    ref={ref}
                    className={`${styles.grid} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${styles.card} glass`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <h3 className={styles.title}>{project.title}</h3>
                            <span className={styles.tech}>{project.tech}</span>
                            <p className={styles.description}>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
