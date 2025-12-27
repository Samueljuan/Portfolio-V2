'use client'

import Link from 'next/link'
import styles from './Hero.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useTypewriter } from '@/hooks/useTypewriter'

export default function Hero() {
    const { ref, isVisible } = useScrollAnimation()
    const text = useTypewriter([
        "a Product Associate",
        "a Technical Bridge Builder",
        "an End-to-End Product Owner",
        "a QA Automation Enthusiast"
    ], 100, 50, 2000)

    return (
        <section className={styles.hero}>
            <div className="container">
                <div
                    ref={ref}
                    className={`${styles.content} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    <h1 className={styles.headline}>
                        Product Associate at Kick Avenue | Technical Focus: PRD • Figma • QA Automation • Agile | Jakarta, Indonesia
                    </h1>
                    <p className={`${styles.typewriter} animate-on-scroll delay-100 ${isVisible ? 'is-visible' : ''}`}>
                        I am <span className={styles.highlight}>{text}</span>
                        <span className={styles.cursor}>|</span>
                    </p>
                    <p className={`${styles.subtitle} animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`}>
                        Translating business goals into shippable product outcomes with clear PRDs, design alignment, and quality automation.
                    </p>
                    <div className={`${styles.actions} animate-on-scroll delay-300 ${isVisible ? 'is-visible' : ''}`}>
                        <Link href="#projects" className="btn btn-primary">
                            View Case Studies
                        </Link>
                        <Link href="#contact" className={styles.btnOutline}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
