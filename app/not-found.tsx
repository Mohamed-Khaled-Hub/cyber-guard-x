'use client'

// Core
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
// Components
import Button from '@/src/components/UIRelated/Button'
// Functions
import { setMetadata } from '@/src/utils/Functions'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Styles
import '@/src/styles/pages/not-found.css'

/* eslint-disable react-hooks/exhaustive-deps */
export default function NotFoundPage() {
    // Contexts
    const pathname = usePathname()
    const { name } = useWebsiteInfo()

    useEffect(() => {
        setMetadata(
            `404 | ${name}`,
            'This page could not be found. Please check the URL or return to the homepage.',
            ['404 error', 'page not found', `${name} 404`, 'missing page']
        )
    }, [])

    const notFoundData = {
        title: 'Page Not Found',
        text: (
            <>
                Oops! The page{' '}
                <code className='not-found-path'>{pathname}</code> does not
                exist or has been moved.
            </>
        ),
        button: { label: 'Back to Home', href: '/' },
    }

    return (
        <div className='not-found-page'>
            <section className='not-found'>
                <div className='not-found-text'>
                    <h1>{notFoundData.title}</h1>
                    <p>{notFoundData.text}</p>
                    <Button
                        label={notFoundData.button.label}
                        href={notFoundData.button.href}
                        variant='service'
                    />
                </div>
            </section>
        </div>
    )
}
