// Core
import { Metadata } from 'next'
import { Suspense } from 'react'
// Components
import Loader from '@/src/components/UIRelated/Loader'
// Pages
import ServicesPage from '@/app/services/ServicesPage'

export const metadata: Metadata = {
    title: 'Our Services | CyberGuardX',
    description:
        'Discover CyberGuardX services, including advanced cybersecurity solutions, custom software development, and IT consulting designed to protect and grow your business.',
    keywords: [
        'CyberGuardX services',
        'cybersecurity solutions',
        'software development',
        'IT consulting',
        'data protection',
        'cloud solutions',
        'business security services',
    ],
}

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <ServicesPage />
        </Suspense>
    )
}
