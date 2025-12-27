'use client'

import styles from './About.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function About() {
    const { ref, isVisible } = useScrollAnimation()

    const skills = [
        "Product Management", "SQL", "Python", "React.js", "Next.js",
        "Market Research", "IT Project Management", "Customer Success",
        "Cross-Functional Collaboration", "English", "Bahasa Indonesia"
    ]

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div
                    ref={ref}
                    className={`${styles.grid} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    <div className={styles.text}>
                        <p>
                            I am a Product Associate at Kick Avenue, where I bridge the gap between business requirements and technical engineering.
                            With a background in Computer Science (3.91 GPA), I leverage my technical expertise to build seamless digital products.
                        </p>
                        <p>
                            Currently, I am also involved in designing and implementing automation using Playwright, ensuring product quality and efficiency.
                            My experience spans from Customer Success to leading tech teams, giving me a holistic view of the product lifecycle.
                        </p>
                    </div>
                    <div className={`${styles.skills} glass animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`}>
                        <h3 className={styles.skillsTitle}>Skills</h3>
                        <div className={styles.skillList}>
                            {skills.map((skill) => (
                                <span key={skill} className={styles.skillTag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
