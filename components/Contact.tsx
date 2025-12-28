'use client'

import { useId } from 'react'
import styles from './Contact.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useContactForm } from '@/hooks/useContactForm'
import { profile } from '@/data/portfolio'

export default function Contact() {
    const { ref, isVisible } = useScrollAnimation()
    const { linkedInUrl } = profile
    const {
        statusMessage,
        statusType,
        isSubmitting,
        isFormValid,
        fieldErrors,
        emailValue,
        setEmailValue,
        phoneValue,
        handlePhoneChange,
        subjectValue,
        setSubjectValue,
        messageValue,
        setMessageValue,
        handleSubmit,
        dismissToast,
        clearFieldError,
    } = useContactForm(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim())
    const emailErrorId = useId()
    const phoneErrorId = useId()
    const subjectErrorId = useId()
    const messageErrorId = useId()

    return (
        <section id="contact" className={`section ${styles.section}`} aria-labelledby="contact-title">
            <div className="container">
                <div
                    ref={ref}
                    className={`${styles.altCard} glass animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                >
                    <div className={styles.altHeader}>
                        <div>
                            <h2 id="contact-title" className={`section-title ${styles.altTitle}`}>Get In Touch</h2>
                            <p className={styles.altText}>
                                Open to <strong>Technical Product Management</strong> and <strong>Product Leadership</strong>{' '}
                                opportunities in <strong>Jakarta (or remote)</strong>. You can connect directly via{' '}
                                <a
                                    href={linkedInUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.altInlineLink}
                                >
                                    LinkedIn
                                </a>{' '}
                                or send an <strong>email</strong> using the form below.
                            </p>
                        </div>
                    </div>
                    <form className={styles.altForm} onSubmit={handleSubmit} noValidate>
                        <div className={styles.altRow}>
                            <label className={styles.field}>
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@email.com"
                                    autoComplete="email"
                                    className={styles.input}
                                    aria-invalid={Boolean(fieldErrors.email)}
                                    aria-describedby={fieldErrors.email ? emailErrorId : undefined}
                                    value={emailValue}
                                    onChange={(event) => {
                                        setEmailValue(event.target.value)
                                    }}
                                />
                                {fieldErrors.email && (
                                    <span className={styles.fieldError} id={emailErrorId}>
                                        {fieldErrors.email}
                                    </span>
                                )}
                            </label>
                            <label className={styles.field}>
                                <span>Phone (optional)</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+62 812-3456-7890"
                                    autoComplete="tel"
                                    inputMode="tel"
                                    className={styles.input}
                                    aria-invalid={Boolean(fieldErrors.phone)}
                                    aria-describedby={fieldErrors.phone ? phoneErrorId : undefined}
                                    value={phoneValue}
                                    onChange={(event) => handlePhoneChange(event.target.value)}
                                />
                                {fieldErrors.phone && (
                                    <span className={styles.fieldError} id={phoneErrorId}>
                                        {fieldErrors.phone}
                                    </span>
                                )}
                            </label>
                        </div>
                        <label className={styles.field}>
                            <span>Subject</span>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Project inquiry"
                                className={styles.input}
                                aria-invalid={Boolean(fieldErrors.subject)}
                                aria-describedby={fieldErrors.subject ? subjectErrorId : undefined}
                                value={subjectValue}
                                onChange={(event) => {
                                    setSubjectValue(event.target.value)
                                    clearFieldError('subject')
                                }}
                            />
                                {fieldErrors.subject && (
                                    <span className={styles.fieldError} id={subjectErrorId}>
                                        {fieldErrors.subject}
                                    </span>
                                )}
                        </label>
                        <label className={styles.field}>
                            <span>Message</span>
                            <textarea
                                name="message"
                                placeholder="Share a short brief..."
                                className={styles.textarea}
                                rows={4}
                                aria-invalid={Boolean(fieldErrors.message)}
                                aria-describedby={fieldErrors.message ? messageErrorId : undefined}
                                value={messageValue}
                                onChange={(event) => {
                                    setMessageValue(event.target.value)
                                    clearFieldError('message')
                                }}
                            />
                            {fieldErrors.message && (
                                <span className={styles.fieldError} id={messageErrorId}>
                                    {fieldErrors.message}
                                </span>
                            )}
                        </label>
                        <div className={styles.altSubmit}>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting || !isFormValid}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
                {statusMessage && statusType && (
                    <div
                        className={`${styles.toast} ${statusType === 'error' ? styles.toastError : styles.toastSuccess}`}
                        role="status"
                        aria-live="polite"
                    >
                        <span className={styles.toastIcon} aria-hidden="true">
                            {statusType === 'success' ? '✓' : '⚠'}
                        </span>
                        <span className={styles.toastText}>{statusMessage}</span>
                        <button
                            type="button"
                            className={styles.toastClose}
                            onClick={dismissToast}
                            aria-label="Close notification"
                        >
                            ×
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
