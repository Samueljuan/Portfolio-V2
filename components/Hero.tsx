'use client'

import Link from 'next/link'
import styles from './Hero.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useTypewriter } from '@/hooks/useTypewriter'
import { heroPhrases, heroSubheadline, heroSupporting, profile } from '@/data/portfolio'
import { Button } from '@/components/Button'

export default function Hero() {
    const { ref, isVisible } = useScrollAnimation()
    const text = useTypewriter(heroPhrases, 90, 45, 1800)

    return (
        <section className={styles.hero}>
            <div className="container">
                <div
                    ref={ref}
                    className={`${styles.content} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    <div className={styles.text}>
                        <h1 className={styles.headline}>
                            <span className="sr-only">I'm {heroPhrases[0] ?? ''}</span>
                            <span aria-hidden="true">
                                <span className={styles.prefix}>I'm</span>{' '}
                                <span className={styles.highlight}>{text}</span>
                                <span className={styles.cursor}>|</span>
                            </span>
                        </h1>
                        <p className={styles.supporting}>{heroSupporting}</p>
                        <p className={styles.subheadline}>{heroSubheadline}</p>
                        <div className={styles.actions}>
                            <Button href="#projects">View Case Studies</Button>
                            <Button href={profile.cvUrl} download="Samuel-Juan-CV.pdf">
                                Download CV
                            </Button>
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
