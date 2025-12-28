'use client'

import { useEffect } from 'react'

export default function ScrollSpy() {
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[]
        if (sections.length === 0) {
            return
        }

        let currentId = ''
        const resetToCleanUrl = () => {
            if (window.location.hash) {
                window.history.replaceState(null, '', window.location.pathname)
            }
            currentId = ''
        }

        const handleScroll = () => {
            if (window.scrollY < 80) {
                resetToCleanUrl()
            }
        }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return
                    }
                    const id = entry.target.id
                    if (!id || id === currentId) {
                        return
                    }
                    currentId = id
                    window.history.replaceState(null, '', `#${id}`)
                })
            },
            {
                rootMargin: '-40% 0px -50% 0px',
                threshold: 0,
            }
        )

        sections.forEach((section) => observer.observe(section))
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return null
}
