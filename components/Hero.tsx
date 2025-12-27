'use client'

import Link from 'next/link'
import styles from './Hero.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useTypewriter } from '@/hooks/useTypewriter'

export default function Hero() {
    const { ref, isVisible } = useScrollAnimation()
    const text = useTypewriter([
        "Samuel Juan",
        "a Product Associate",
        "a Tech Enthusiast"
    ], 100, 50, 2000)

    return (
        <section className={styles.hero}>
            <div className="container">
                <div
                    ref={ref}
                    className={`${styles.content} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    <h1 className={styles.title}>
                        Hi, I'm <span className={styles.highlight}>{text}</span>
                        <span className={styles.cursor}>|</span>
                    </h1>
                    <p className={`${styles.subtitle} animate - on - scroll delay - 100 ${isVisible ? 'is-visible' : ''} `}>
                        Product Associate & Full Stack Developer based in Jakarta.
                        <br />
                        Building digital products with purpose.
                    </p>
                    <div className={`${styles.actions} animate - on - scroll delay - 200 ${isVisible ? 'is-visible' : ''} `}>
                        <Link href="#projects" className="btn btn-primary">
                            View Projects
                        </Link>
                        <Link href="#contact" className={styles.btnOutline}>
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
