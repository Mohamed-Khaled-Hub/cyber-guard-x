// Core
import { Metadata } from 'next'
// Page
import HomePage from '@/app/HomePage'

export const metadata: Metadata = {
    title: 'CyberGuardX | Cybersecurity & Software Development Solutions',
    description:
        'CyberGuardX delivers comprehensive cybersecurity and software development solutions, tailored to meet the evolving needs of businesses and individuals across Egypt and the Arab region.',
    keywords: [
        'CyberGuardX',
        'cybersecurity solutions',
        'software development',
        'IT consulting',
        'data protection',
        'cloud solutions',
        'business security',
        'technology services Egypt',
    ],
}

export default function Page() {
    return <HomePage />
}
