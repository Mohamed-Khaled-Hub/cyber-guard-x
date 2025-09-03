// Core
import { NextResponse } from 'next/server'
// Types
import { ReviewObject } from '@/src/types/objectsTypes'

export async function GET(): Promise<NextResponse<ReviewObject[]>> {
    const reviews: ReviewObject[] = [
        {
            imgSrc: '/assets/images/reviews/review1.png',
            name: 'John Doe',
            review: 'Excellent service! They helped secure our systems effectively.',
        },
        {
            imgSrc: '/assets/images/reviews/review2.png',
            name: 'Jane Smith',
            review: 'Professional and thorough in their penetration testing.',
        },
        {
            imgSrc: '/assets/images/reviews/review3.png',
            name: 'Michael Brown',
            review: 'We feel much safer after their security audit.',
        },
    ]

    return NextResponse.json(reviews)
}
