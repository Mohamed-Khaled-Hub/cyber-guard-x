// Core
import { Metadata } from 'next'
// Page
import PrivacyPolicyPage from '@/app/privacy-policy/PrivacyPolicyPage'

export const metadata: Metadata = {
    title: 'Privacy Policy | CyberGuardX',
    description:
        'Read the CyberGuardX Privacy Policy to learn how we collect, use, and protect your personal information while providing cybersecurity and software development services.',
    keywords: [
        'CyberGuardX privacy policy',
        'data protection policy',
        'user data security',
        'personal information protection',
        'cybersecurity privacy',
        'software development privacy',
        'IT consulting privacy',
    ],
}

export default function Page() {
    return <PrivacyPolicyPage />
}
