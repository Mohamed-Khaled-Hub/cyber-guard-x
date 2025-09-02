'use client'

// Core
import { useEffect } from 'react'
// Functions
import { setTitleAndDesc } from '@/src/utils/Functions'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Style
import '@/src/styles/pages/page.css'
import OurTeamCard from '@/src/components/CardsRelated/OurTeamCard'
import ReviewCard from '@/src/components/CardsRelated/ReviewCard'
import ServiceCard from '@/src/components/CardsRelated/ServiceCard'
import MiniServiceCard from '@/src/components/CardsRelated/MiniServiceCard'

/* eslint-disable react-hooks/exhaustive-deps */
export default function HomePage() {
    const { name, desc } = useWebsiteInfo()

    useEffect(() => {
        setTitleAndDesc(name, desc)
    }, [])

    return (
        <>
            <div className='home-page'>Home</div>
        </>
    )
}
