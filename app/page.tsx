'use client'

// Core
import { useEffect } from 'react'
// Functions
import { setTitleAndDesc } from '@/src/utils/Functions'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Style
import '@/src/styles/pages/page.css'
import ContactForm from '@/src/components/UIRelated/ContactForm'

/* eslint-disable react-hooks/exhaustive-deps */
export default function HomePage() {
    const { name, desc } = useWebsiteInfo()

    useEffect(() => {
        setTitleAndDesc(name, desc)
    }, [])

    return (
        <>
            <div className='home-page'>
                <p>Home</p>
                <ContactForm />
            </div>
        </>
    )
}
