'use client'

import styles from './Projects.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { caseStudies } from '@/data/portfolio'
import { renderWithEmphasis } from '@/utils/text'

export default function Projects() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section id="projects" className="section" aria-labelledby="projects-title">
            <div className="container">
                <h2 id="projects-title" className="section-title">Case Studies</h2>
                <div
                    ref={ref}
                    className={styles.grid}
                >
                    {caseStudies.map((project, index) => (
                        <div
                            key={project.title}
                            className={`${styles.card} glass animate-on-scroll ${isVisible ? 'is-visible' : ''} ${project.highlight ? styles.highlightCard : ''}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className={styles.body}>
                                {project.tags && (
                                    <div className={styles.tags}>
                                        {project.tags.map((tag) => (
                                            <span key={tag} className={styles.tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <h3 className={styles.title}>{project.title}</h3>
                                <div className={styles.meta}>
                                    <span className={styles.role}>{project.role}</span>
                                    <span className={styles.duration}>{project.duration}</span>
                                </div>
                                <p className={styles.description}>{renderWithEmphasis(project.description)}</p>
                                <ul className={styles.achievements}>
                                    {project.achievements.map((achievement) => (
                                        <li key={achievement} className={styles.achievementItem}>
                                            {renderWithEmphasis(achievement)}
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
