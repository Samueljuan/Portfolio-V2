'use client'

import { useEffect, useState } from 'react'

export function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        const updatePreference = (event: MediaQueryListEvent | MediaQueryList) => {
            setPrefersReducedMotion(event.matches)
        }

        updatePreference(mediaQuery)

        mediaQuery.addEventListener('change', updatePreference)

        return () => {
            mediaQuery.removeEventListener('change', updatePreference)
        }
    }, [])

    return prefersReducedMotion
}
