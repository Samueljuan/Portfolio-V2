'use client'

import { useState, useEffect } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useTypewriter(words: readonly string[], typeSpeed: number = 100, deleteSpeed: number = 50, pauseDuration: number = 2000) {
    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [reverse, setReverse] = useState(false)
    const [text, setText] = useState('')
    const prefersReducedMotion = usePrefersReducedMotion()

    useEffect(() => {
        if (!prefersReducedMotion) {
            return
        }
        const fallback = words[0] ?? ''
        setText(fallback)
    }, [prefersReducedMotion, words])

    useEffect(() => {
        if (prefersReducedMotion) {
            return
        }
        if (words.length === 0) {
            setText('')
            return
        }
        if (index >= words.length) {
            setIndex(0)
            return
        }

        const currentWord = words[index]
        setText(currentWord.substring(0, subIndex))

        if (!reverse && subIndex === currentWord.length) {
            const pauseTimeout = setTimeout(() => {
                setReverse(true)
            }, pauseDuration)
            return () => clearTimeout(pauseTimeout)
        }

        if (reverse && subIndex === 0) {
            setReverse(false)
            setIndex((prev) => (prev + 1) % words.length)
            return
        }

        const jitter = Math.floor(Math.random() * 120)
        const baseSpeed = reverse ? deleteSpeed : typeSpeed
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1))
        }, Math.max(baseSpeed, jitter))

        return () => clearTimeout(timeout)
    }, [subIndex, index, reverse, words, typeSpeed, deleteSpeed, pauseDuration])

    return text
}
