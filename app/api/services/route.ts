// Core
import { NextResponse } from 'next/server'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'

export async function GET(): Promise<NextResponse<ServiceObject[]>> {
    const services: ServiceObject[] = [
        {
            imgSrc: '/images/services/penetration-testing.jpg',
            name: 'Web Penetration Testing',
            description:
                'Comprehensive penetration testing services to identify system vulnerabilities and provide a complete remedy roadmap.',
        },
        {
            imgSrc: '/images/services/chatbots.jpg',
            name: 'Chatbots',
            description:
                'Tailored chatbot solutions designed to enhance your business communication and automation.',
        },
        {
            imgSrc: '/images/services/software-systems.jpg',
            name: 'Software Systems',
            description:
                'Custom software system design and development to fit your organizational needs.',
        },
    ]

    return NextResponse.json(services)
}
