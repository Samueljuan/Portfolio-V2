'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { isValidEmail, isValidPhone, normalizePhone } from '@/utils/validation'

type StatusType = 'success' | 'error' | ''
type FieldErrors = {
    email?: string
    phone?: string
    subject?: string
    message?: string
}

export function useContactForm(formspreeEndpoint?: string) {
    const [statusMessage, setStatusMessage] = useState('')
    const [statusType, setStatusType] = useState<StatusType>('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
    const [emailValue, setEmailValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [subjectValue, setSubjectValue] = useState('')
    const [messageValue, setMessageValue] = useState('')
    const emailValidationTimer = useRef<number | null>(null)
    const phoneValidationTimer = useRef<number | null>(null)

    useEffect(() => {
        if (!emailValue) {
            setFieldErrors((prev) => {
                if (!prev.email) {
                    return prev
                }
                return { ...prev, email: undefined }
            })
            return
        }
        if (emailValidationTimer.current) {
            window.clearTimeout(emailValidationTimer.current)
        }
        emailValidationTimer.current = window.setTimeout(() => {
            const nextError = isValidEmail(emailValue.trim())
                ? undefined
                : 'Please enter a valid email address.'
            setFieldErrors((prev) => {
                if (prev.email === nextError) {
                    return prev
                }
                return { ...prev, email: nextError }
            })
        }, 50)
        return () => {
            if (emailValidationTimer.current) {
                window.clearTimeout(emailValidationTimer.current)
            }
        }
    }, [emailValue])

    const handlePhoneChange = useCallback(
        (value: string) => {
            setPhoneValue(normalizePhone(value))
        },
        [normalizePhone]
    )

    useEffect(() => {
        if (!phoneValue) {
            setFieldErrors((prev) => {
                if (!prev.phone) {
                    return prev
                }
                return { ...prev, phone: undefined }
            })
            return
        }
        if (phoneValidationTimer.current) {
            window.clearTimeout(phoneValidationTimer.current)
        }
        phoneValidationTimer.current = window.setTimeout(() => {
            const nextError = isValidPhone(phoneValue)
                ? undefined
                : 'Please enter a valid phone number.'
            setFieldErrors((prev) => {
                if (prev.phone === nextError) {
                    return prev
                }
                return { ...prev, phone: nextError }
            })
        }, 50)
        return () => {
            if (phoneValidationTimer.current) {
                window.clearTimeout(phoneValidationTimer.current)
            }
        }
    }, [phoneValue])

    const clearFieldError = useCallback((field: keyof FieldErrors) => {
        setFieldErrors((prev) => ({ ...prev, [field]: undefined }))
    }, [])

    const isFormValid =
        Boolean(emailValue.trim()) &&
        isValidEmail(emailValue) &&
        Boolean(subjectValue.trim()) &&
        Boolean(messageValue.trim()) &&
        (!phoneValue || isValidPhone(phoneValue)) &&
        !Object.values(fieldErrors).some(Boolean)

    const dismissToast = useCallback(() => {
        setStatusMessage('')
        setStatusType('')
    }, [])

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const fromEmail = emailValue.trim()
            const phone = normalizePhone(phoneValue)
            const subject = subjectValue.trim()
            const message = messageValue.trim()
            const nextErrors: FieldErrors = {}

            if (!fromEmail) {
                nextErrors.email = 'Email is required.'
            } else if (!isValidEmail(fromEmail)) {
                nextErrors.email = 'Please enter a valid email address.'
            }

            if (phone) {
                if (!isValidPhone(phone)) {
                    nextErrors.phone = 'Please enter a valid phone number.'
                }
            }

            if (!subject) {
                nextErrors.subject = 'Subject is required.'
            }

            if (!message) {
                nextErrors.message = 'Message is required.'
            }

            if (Object.keys(nextErrors).length > 0) {
                setFieldErrors(nextErrors)
                setStatusMessage('')
                setStatusType('')
                return
            }

            if (!formspreeEndpoint) {
                setStatusType('error')
                setStatusMessage('Email service is not configured. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT and restart the dev server.')
                return
            }

            setFieldErrors({})
            setIsSubmitting(true)
            try {
                const payload = new FormData()
                payload.append('email', fromEmail)
                if (phone) {
                    payload.append('phone', phone)
                }
                payload.append('subject', subject)
                payload.append('message', message)
                payload.append('_subject', subject)

                const response = await fetch(formspreeEndpoint, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                    },
                    body: payload,
                })

                if (!response.ok) {
                    setStatusType('error')
                    setStatusMessage('Something went wrong. Please try again or email me directly.')
                    return
                }

                setStatusType('success')
                setStatusMessage('Message sent successfully. I will reply as soon as possible.')
                setFieldErrors({})
                setEmailValue('')
                setPhoneValue('')
                setSubjectValue('')
                setMessageValue('')
            } catch (error) {
                setStatusType('error')
                setStatusMessage('Something went wrong. Please try again or email me directly.')
            } finally {
                setIsSubmitting(false)
                window.setTimeout(() => {
                    setStatusMessage('')
                    setStatusType('')
                }, 5000)
            }
        },
        [
            emailValue,
            phoneValue,
            subjectValue,
            messageValue,
            formspreeEndpoint,
            isValidEmail,
            isValidPhone,
            normalizePhone,
        ]
    )

    return {
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
    }
}
