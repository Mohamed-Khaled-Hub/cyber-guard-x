// Core
import { NextResponse } from 'next/server'
// Types
import { TeamMemberObject } from '@/src/types/objectsTypes'

export async function GET(): Promise<NextResponse<TeamMemberObject[]>> {
    const team: TeamMemberObject[] = [
        {
            imgSrc: '/images/team/member1.jpg',
            name: 'Alice Johnson',
            role: 'Cybersecurity Analyst',
        },
        {
            imgSrc: '/images/team/member2.jpg',
            name: 'Robert Wilson',
            role: 'Penetration Tester',
        },
        {
            imgSrc: '/images/team/member3.jpg',
            name: 'Emily Davis',
            role: 'Security Consultant',
        },
    ]

    return NextResponse.json(team)
}
