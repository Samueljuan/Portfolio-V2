'use client'

import styles from './About.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function About() {
    const { ref, isVisible } = useScrollAnimation()
    const aboutCopy = [
        "Product Associate at Kick Avenue with a technical focus on PRD creation, requirement analysis, and cross-functional execution. I translate business goals into clear user flows, acceptance criteria, and delivery plans that keep engineering and stakeholders aligned.",
        "My experience spans product delivery, QA automation, and customer success. I build Playwright suites to safeguard releases, collaborate in Agile rituals, and use data-informed insights to improve user experience and operational outcomes."
    ]

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div
                    ref={ref}
                    className={`${styles.content} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    {aboutCopy.map((paragraph) => (
                        <p key={paragraph} className={styles.text}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}
