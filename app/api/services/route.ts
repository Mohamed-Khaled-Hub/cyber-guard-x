// Core
import { NextResponse } from 'next/server'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'

// Shared mock data (could also be moved to a separate file to avoid duplication)
export const services: ServiceObject[] = [
    {
        imgSrc: '/images/services/penetration-testing.jpg',
        name: 'Penetration Testing',
        description:
            'Comprehensive penetration testing services to identify system vulnerabilities and provide a complete remedy roadmap.',
        extraInfo: [
            {
                imgSrc: '/images/services/penetration-testing-extra1.jpg',
                description:
                    'Covers OWASP Top 10 vulnerabilities and common misconfigurations.',
            },
            {
                imgSrc: '/images/services/penetration-testing-extra2.jpg',
                description:
                    'Includes detailed reporting with risk severity levels and remediation advice.',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-vuln.jpg',
                name: 'Vulnerability Assessment',
                description:
                    'Full scanning and prioritization of vulnerabilities for remediation.',
            },
            {
                imgSrc: '/images/services/offer-retest.jpg',
                name: 'Re-Testing',
                description:
                    'Follow-up testing to confirm applied fixes are effective.',
            },
            {
                imgSrc: '/images/services/offer-training.jpg',
                name: 'Security Training',
                description:
                    'Hands-on training for developers to prevent common security flaws.',
            },
        ],
    },
    {
        imgSrc: '/images/services/chatbots.jpg',
        name: 'Chatbots',
        description:
            'Tailored chatbot solutions designed to enhance your business communication and automation.',
        extraInfo: [
            {
                imgSrc: '/images/services/chatbots-extra1.jpg',
                description:
                    'AI-powered intent recognition for natural conversations.',
            },
            {
                imgSrc: '/images/services/chatbots-extra2.jpg',
                description:
                    'Multi-platform support (WhatsApp, Messenger, Slack, and web).',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-chat-int.jpg',
                name: 'Chat Integrations',
                description:
                    'Seamless connection with CRM and third-party APIs.',
            },
            {
                imgSrc: '/images/services/offer-chat-analytics.jpg',
                name: 'Analytics Dashboard',
                description:
                    'Track user conversations and performance metrics.',
            },
        ],
    },
    {
        imgSrc: '/images/services/software-systems.jpg',
        name: 'Software Systems',
        description:
            'Custom software system design and development to fit your organizational needs.',
        extraInfo: [
            {
                imgSrc: '/images/services/software-systems-extra1.jpg',
                description:
                    'ERP and CRM solutions built for scalability and integration.',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-custom.jpg',
                name: 'Custom Development',
                description:
                    'Fully tailored systems to meet specific business workflows.',
            },
            {
                imgSrc: '/images/services/offer-support.jpg',
                name: 'Long-Term Support',
                description:
                    'Ongoing updates, bug fixes, and new feature rollouts.',
            },
        ],
    },
]

export async function GET(): Promise<NextResponse<ServiceObject[]>> {
    return NextResponse.json(services)
}
