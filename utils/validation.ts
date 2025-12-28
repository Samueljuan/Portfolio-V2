const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(value: string) {
    return emailPattern.test(value.trim())
}

export function normalizePhone(value: string) {
    const digits = value.replace(/\D/g, '')
    return digits ? `+${digits}` : ''
}

export function isValidPhone(value: string) {
    const digits = value.replace(/\D/g, '')
    return digits.length >= 7
}
