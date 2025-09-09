'use client'

// Core
import { useEffect, useMemo, useState, CSSProperties } from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
// Components
import ReviewCard from '@/src/components/CardsRelated/ReviewCard'
// Types
import { ReviewsCarouselProps } from '@/src/types/propsTypes'
// Style
import '@/src/styles/components/SlidersRelated/ReviewsCarousel.css'
import { renderClasses } from '@/src/utils/Functions'

function useSlidesPerView() {
    const [spv, setSpv] = useState(1)

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth
            setSpv(w >= 1024 ? 3 : w >= 768 ? 2 : 1)
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    return spv
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
    const slidesPerView = useSlidesPerView()
    const baseLen = reviews.length

    // Clone count depends on SPV and list length
    const clones = Math.min(slidesPerView, baseLen)

    // Extended list (always compute via useMemo)
    const extended = useMemo(() => {
        if (baseLen === 0) return []
        const head = reviews.slice(-clones)
        const tail = reviews.slice(0, clones)
        return [...head, ...reviews, ...tail]
    }, [reviews, clones, baseLen])

    // Start index (after left clones)
    const [index, setIndex] = useState(clones)
    const [transitionEnabled, setTransitionEnabled] = useState(true)

    useEffect(() => {
        setIndex(clones)
    }, [clones, baseLen])

    const goNext = () => setIndex((i) => i + 1)
    const goPrev = () => setIndex((i) => i - 1)

    const handleTransitionEnd = () => {
        if (baseLen === 0) return
        if (index >= baseLen + clones) {
            setTransitionEnabled(false)
            setIndex(clones)
            requestAnimationFrame(() =>
                requestAnimationFrame(() => setTransitionEnabled(true))
            )
        } else if (index < clones) {
            setTransitionEnabled(false)
            setIndex(baseLen + clones - 1)
            requestAnimationFrame(() =>
                requestAnimationFrame(() => setTransitionEnabled(true))
            )
        }
    }

    const slideWidthPct = 100 / slidesPerView
    const translatePct = -index * slideWidthPct

    if (baseLen === 0) return null

    if (baseLen === 1) {
        return (
            <div className='reviews-slider'>
                <div
                    className='reviews-track-wrapper'
                    style={{ '--spv': 1 } as CSSProperties}
                >
                    <div className='reviews-track no-transition'>
                        <div className='review-slide'>
                            <ReviewCard
                                imgSrc={reviews[0].imgSrc}
                                name={reviews[0].name}
                                review={reviews[0].review}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='reviews-slider'>
            <button
                onClick={goPrev}
                className='reviews-arrow left'
                aria-label='Previous'
            >
                <MdOutlineArrowBackIos />
            </button>

            <div
                className='reviews-track-wrapper'
                style={{ '--spv': slidesPerView } as CSSProperties}
            >
                <div
                    className={`reviews-track ${transitionEnabled ? '' : 'no-transition'}`}
                    style={{ transform: `translateX(${translatePct}%)` }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extended.map((r, i) => {
                        return (
                            <div
                                className={renderClasses(
                                    'review-slide transition-transform duration-500',
                                    i === index + Math.floor(slidesPerView / 2)
                                        ? 'scale-110'
                                        : 'scale-90 opacity-80'
                                )}
                                key={`review-${i}`}
                            >
                                <ReviewCard
                                    imgSrc={r.imgSrc}
                                    name={r.name}
                                    review={r.review}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            <button
                onClick={goNext}
                className='reviews-arrow right'
                aria-label='Next'
            >
                <MdOutlineArrowForwardIos />
            </button>
        </div>
    )
}
