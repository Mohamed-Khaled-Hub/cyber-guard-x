'use client'

// Core
import { useEffect } from 'react'
// Functions
import { setTitleAndDesc } from '@/src/utils/Functions'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Style
import '@/src/styles/pages/page.css'
import MiniServiceCard from '@/src/components/CardsRelated/MiniServiceCard'

/* eslint-disable react-hooks/exhaustive-deps */
export default function HomePage() {
    const { name, desc } = useWebsiteInfo()

    useEffect(() => {
        setTitleAndDesc(name, desc)
    }, [])

    return (
        <>
            <div className='home-page'>
                <div></div>
                <div className='why-choose-us'>
                    {[
                        {
                            imgSrc: '/assets/images/home-page/integrity.svg',
                            name: 'Integrity',
                            description:
                                'Acting with strong ethics is the foundation of trust',
                        },
                        {
                            imgSrc: '/assets/images/home-page/integrity.svg',
                            name: 'Integrity',
                            description:
                                'Acting with strong ethics is the foundation of trust',
                        },
                        {
                            imgSrc: '/assets/images/home-page/integrity.svg',
                            name: 'Integrity',
                            description:
                                'Acting with strong ethics is the foundation of trust',
                        },
                    ].map((item, idx) => (
                        <MiniServiceCard
                            key={`mini-service-${idx}`}
                            imgSrc={item.imgSrc}
                            name={item.name}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
