'use client'

import { usePathname } from 'next/navigation'
// Components
import Button from '@/src/components/UIRelated/Button'
// Styles
import '@/src/styles/pages/not-found.css'

export default function NotFoundPage() {
    const pathname = usePathname()

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
