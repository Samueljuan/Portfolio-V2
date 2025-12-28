import styles from './not-found.module.css'
import { Button } from '@/components/Button'

export default function NotFound() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                <p className={styles.code}>404</p>
                <h1 className={styles.title}>Page not found</h1>
                <p className={styles.text}>
                    The page you are looking for doesn’t exist or has been moved.
                </p>
                <Button href="/">Back to Home</Button>
            </div>
        </section>
    )
}
