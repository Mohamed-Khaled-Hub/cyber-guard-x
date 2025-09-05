// Core
import { Metadata } from 'next'
// Page
import ContactUsPage from '@/app/contact-us/ContactUsPage'

export const metadata: Metadata = {
    title: 'Contact Us | CyberGuardX',
    description:
        'Get in touch with CyberGuardX today. Reach out for inquiries about cybersecurity, software development, and IT consulting services tailored to your business needs.',
    keywords: [
        'CyberGuardX contact',
        'contact CyberGuardX',
        'get in touch CyberGuardX',
        'cybersecurity support',
        'software development inquiries',
        'IT consulting contact',
        'business inquiries',
    ],
}

export default function Page() {
    return <ContactUsPage />
}
