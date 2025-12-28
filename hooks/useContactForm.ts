'use client'

import { useCallback, useEffect, useState } from 'react'
import { isValidEmail, isValidPhone, normalizePhone } from '@/utils/validation'
import { useDebouncedValue } from '@/hooks/useDebouncedValue'

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
    const debouncedEmail = useDebouncedValue(emailValue, 50)
    const debouncedPhone = useDebouncedValue(phoneValue, 50)

    useEffect(() => {
        if (!debouncedEmail) {
            setFieldErrors((prev) => {
                if (!prev.email) {
                    return prev
                }
                return { ...prev, email: undefined }
            })
            return
        }
        const nextError = isValidEmail(debouncedEmail.trim())
            ? undefined
            : 'Please enter a valid email address.'
        setFieldErrors((prev) => {
            if (prev.email === nextError) {
                return prev
            }
            return { ...prev, email: nextError }
        })
    }, [debouncedEmail])

    const handlePhoneChange = useCallback(
        (value: string) => {
            setPhoneValue(normalizePhone(value))
        },
        [normalizePhone]
    )

    useEffect(() => {
        if (!debouncedPhone) {
            setFieldErrors((prev) => {
                if (!prev.phone) {
                    return prev
                }
                return { ...prev, phone: undefined }
            })
            return
        }
        const nextError = isValidPhone(debouncedPhone)
            ? undefined
            : 'Please enter a valid phone number.'
        setFieldErrors((prev) => {
            if (prev.phone === nextError) {
                return prev
            }
            return { ...prev, phone: nextError }
        })
    }, [debouncedPhone])

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
            const formElement = event.currentTarget
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
                const firstField = ['email', 'phone', 'subject', 'message'].find((field) => nextErrors[field as keyof FieldErrors])
                if (firstField) {
                    const fieldElement = formElement.querySelector(`[name="${firstField}"]`) as HTMLElement | null
                    fieldElement?.focus()
                }
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
        [emailValue, phoneValue, subjectValue, messageValue, formspreeEndpoint]
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
