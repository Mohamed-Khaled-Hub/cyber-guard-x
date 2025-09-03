// Core
import { NextResponse } from 'next/server'
// Types
import { ReviewObject } from '@/src/types/objectsTypes'

export async function GET(): Promise<NextResponse<ReviewObject[]>> {
    const reviews: ReviewObject[] = [
        {
            imgSrc: '/assets/images/reviews/review1.png',
            name: 'John Doe',
            review: 'Honestly, I didn’t expect the system to make such a difference. It helped us organize sales and inventory, and we can generate quick reports that show the company’s status. This allowed me to focus on growth instead of wasting time on manual calculations.',
        },
        {
            imgSrc: '/assets/images/reviews/review2.png',
            name: 'Jane Smith',
            review: 'We now have a system that allows us to track every booking in just a few simple steps. Even the new employees learned to use it quickly.".',
        },
        {
            imgSrc: '/assets/images/reviews/review3.png',
            name: 'Michael Brown',
            review: 'All appointments and medical records are saved, and I can easily go back to any patient’s notes. The experience is very convenient.',
        },
    ]

    return NextResponse.json(reviews)
}
