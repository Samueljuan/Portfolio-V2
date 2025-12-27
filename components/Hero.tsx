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
    ], 90, 45, 1800)

    return (
        <section className={styles.hero}>
            <div className="container">
                <div
                    ref={ref}
                    className={`${styles.content} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    <div className={styles.text}>
                        <h1 className={styles.headline}>
                            <span className={styles.prefix}>I'm</span>{' '}
                            <span className={styles.highlight}>{text}</span>
                            <span className={styles.cursor}>|</span>
                        </h1>
                        <p className={styles.subheadline}>at Kick Avenue • Jakarta, Indonesia</p>
                        <div className={styles.actions}>
                            <Link href="#projects" className="btn btn-primary">
                                View Case Studies
                            </Link>
                            <Link href="#contact" className={styles.btnOutline}>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
