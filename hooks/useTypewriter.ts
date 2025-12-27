'use client'

import { useState, useEffect } from 'react'

export function useTypewriter(words: string[], typeSpeed: number = 100, deleteSpeed: number = 50, pauseDuration: number = 2000) {
    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [reverse, setReverse] = useState(false)
    const [blink, setBlink] = useState(true)
    const [text, setText] = useState('')

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev)
        }, 500)
        return () => clearTimeout(timeout2)
    }, [blink])

    useEffect(() => {
        if (index >= words.length) {
            setIndex(0)
            return
        }

        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true)
            return
        }

        if (subIndex === 0 && reverse) {
            setReverse(false)
            setIndex((prev) => (prev + 1) % words.length)
            return
        }

        const timeout = setTimeout(() => {
            setText(words[index].substring(0, subIndex))
            setSubIndex((prev) => prev + (reverse ? -1 : 1))
        }, Math.max(reverse ? deleteSpeed : typeSpeed, parseInt(Math.random() * 350 as any))) // Random typing speed for realism

        // Pause at the end of the word
        if (!reverse && subIndex === words[index].length) {
            clearTimeout(timeout)
            setTimeout(() => {
                setReverse(true)
            }, pauseDuration)
            return
        }

        return () => clearTimeout(timeout)
    }, [subIndex, index, reverse, words, typeSpeed, deleteSpeed, pauseDuration])

    return text
}
