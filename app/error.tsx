'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import styles from './error.module.css'
import { Button } from '@/components/Button'

export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                <p className={styles.code}>500</p>
                <h1 className={styles.title}>Something went wrong</h1>
                <p className={styles.text}>
                    An unexpected error occurred. Please try again or return home.
                </p>
                <div className={styles.actions}>
                    <Button type="button" onClick={reset}>
                        Try Again
                    </Button>
                    <Link href="/" className={styles.link}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    )
}
