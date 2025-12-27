'use client'

import styles from './About.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { renderWithEmphasis } from '@/utils/text'

export default function About() {
    const { ref, isVisible } = useScrollAnimation()
    const aboutCopy = [
        "Product Associate with strong technical execution across product development, QA (manual + automation), UI/UX design, and engineering collaboration. Computer Science graduate (**3.91/4.00 GPA**) experienced leading **6–10 engineers** during a full-platform revamp at Kick Avenue, delivering **15+ PRDs**, scalable flows, and **100+ Playwright** automated test cases.",
        "Bridge business and engineering through deep understanding of frontend behaviors, API structures, edge cases, and system constraints. Own product flows end-to-end—from requirement to design to QA to deployment. Previously achieved **95% customer satisfaction** at KarirLab and led **250+ representatives** serving **12,900** MSIB participants."
    ]

    return (
        <section id="about" className="section" aria-labelledby="about-title">
            <div className="container">
                <h2 id="about-title" className="section-title">About Me</h2>
                <div
                    ref={ref}
                    className={`${styles.content} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    {aboutCopy.map((paragraph) => (
                        <p key={paragraph} className={styles.text}>
                            {renderWithEmphasis(paragraph)}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}
