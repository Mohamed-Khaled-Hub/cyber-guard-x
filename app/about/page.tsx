// Core
import { Metadata } from 'next'
// Page
import AboutPage from '@/app/about/AboutPage'

export const metadata: Metadata = {
    title: 'About Us | CyberGuardX',
    description:
        'Learn more about CyberGuardX — our mission, values, and expertise in cybersecurity and software development. Discover how we empower businesses with innovative technology solutions.',
    keywords: [
        'CyberGuardX about',
        'company mission',
        'cybersecurity experts',
        'software development team',
        'IT consulting company',
        'data protection specialists',
        'CyberGuardX values',
    ],
}

export default function Page() {
    return <AboutPage />
}
