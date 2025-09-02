// Core
import { NextResponse } from 'next/server'
// Types
import { ReviewObject } from '@/src/types/objectsTypes'

export async function GET(): Promise<NextResponse<ReviewObject[]>> {
    const reviews: ReviewObject[] = [
        {
            imgSrc: '/images/reviews/review1.jpg',
            name: 'John Doe',
            review: 'Excellent service! They helped secure our systems effectively.',
        },
        {
            imgSrc: '/images/reviews/review2.jpg',
            name: 'Jane Smith',
            review: 'Professional and thorough in their penetration testing.',
        },
        {
            imgSrc: '/images/reviews/review3.jpg',
            name: 'Michael Brown',
            review: 'We feel much safer after their security audit.',
        },
    ]

    return NextResponse.json(reviews)
}
