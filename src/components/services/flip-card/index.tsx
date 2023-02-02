import React, { useEffect, useRef, useState } from 'react'
import { FlipCardInner } from './inner'

export const FlipCard = ({ service }: { service: any }) => {
    // You have two flips that happen at different speeds
    const [flipA, setFlipA] = useState(false)
    const [flipB, setFlipB] = useState(false)
    const card = useRef()

    const toggleFlip = () => {
        const width = window.screen.width
        if (width > 1080) return
        setFlipB(!flipB)
        setFlipA(false)
    }

    // TODO: add scroll effect
    const scrollHandler = () => {
        const top = card.current && card.current.getBoundingClientRect().top
        const bottom =
            card.current && card.current.getBoundingClientRect().bottom
        const height = window.screen.height
        const width = window.screen.width
        if (width > 1080) return
        setFlipB(false)
        if (
            bottom &&
            top &&
            top >= 0 &&
            bottom >= 0 &&
            bottom <= height &&
            top <= height
        ) {
            setFlipA(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler, true)
        return () => {
            window.removeEventListener('scroll', scrollHandler, true)
        }
    }, [])

    return (
        <div
            ref={card}
            onClick={toggleFlip}
            className="w-full flip-card h-[100vw] xl:h-[30vw] lg:h-[40vw] md:h-[60vw] sm:h-[80vw]"
            style={{
                perspective: '1000px',
                backgroundColor: 'transparent',
            }}
        >
            <FlipCardInner flipA={flipA} flipB={flipB} service={service} />
        </div>
    )
}
