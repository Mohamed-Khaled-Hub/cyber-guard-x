'use client'

// Core
import Lottie from 'lottie-react'
// Style
import '@/src/styles/components/UIRelated/Loader.css'
// Animation JSON
import animationData from '@/public/assets/lottie/loader.json'

export default function Loader() {
    return (
        <div className='loader-backdrop'>
            <div className='loader'>
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className='loader-lottie'
                />
            </div>
        </div>
    )
}
