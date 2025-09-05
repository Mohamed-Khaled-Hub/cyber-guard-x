// Core
import { Metadata } from 'next'
// Page
import TermsAndConditionsPage from '@/app/terms-and-conditions/TermsAndConditionsPage'

export const metadata: Metadata = {
    title: 'Terms and Conditions | CyberGuardX',
    description:
        'Review the CyberGuardX Terms and Conditions to understand the rules, guidelines, and legal agreements governing the use of our cybersecurity, software development, and IT consulting services.',
    keywords: [
        'CyberGuardX terms and conditions',
        'service terms',
        'user agreement',
        'cybersecurity terms',
        'software development terms',
        'IT consulting terms',
        'legal policies',
    ],
}

export default function Page() {
    return <TermsAndConditionsPage />
}
