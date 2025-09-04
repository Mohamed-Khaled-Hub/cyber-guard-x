'use client'

// Core
import Image from 'next/image'
import { useState } from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
// Types
import { PartnersSliderProps } from '@/src/types/propsTypes'
// Style
import '@/src/styles/components/SlidersRelated/PartnersSlider.css'

export default function PartnersSlider({
    logos,
    visibleCount,
}: PartnersSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? logos.length - visibleCount : prev - 1
        )
    }

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev >= logos.length - visibleCount ? 0 : prev + 1
        )
    }

    return (
        <div className='partners-slider'>
            {/* Left Arrow */}
            <button className='partners-arrow left' onClick={handlePrev}>
                <MdOutlineArrowBackIos />
            </button>

            {/* Logos Track */}
            <div className='partners-track-wrapper'>
                <div
                    className='partners-track'
                    style={{
                        transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                    }}
                >
                    {logos.map((logo, idx) => (
                        <div className='partner-logo' key={`partner-${idx}`}>
                            <Image
                                width={120}
                                height={60}
                                src={logo}
                                alt={`partner-${idx}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Arrow */}
            <button className='partners-arrow right' onClick={handleNext}>
                <MdOutlineArrowForwardIos />
            </button>
        </div>
    )
}
