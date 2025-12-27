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

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', updatePreference)
        } else {
            mediaQuery.addListener(updatePreference)
        }

        return () => {
            if (mediaQuery.addEventListener) {
                mediaQuery.removeEventListener('change', updatePreference)
            } else {
                mediaQuery.removeListener(updatePreference)
            }
        }
    }, [])

    return prefersReducedMotion
}
