'use client'

// Core
import { useEffect, useState } from 'react'
// Functions
import { setTitleAndDesc } from '@/src/utils/Functions'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Style
import '@/src/styles/pages/page.css'

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
