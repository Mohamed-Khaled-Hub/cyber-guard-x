// Core
import { NextResponse } from 'next/server'
// Types
import { TeamMemberObject } from '@/src/types/objectsTypes'

export async function GET(): Promise<NextResponse<TeamMemberObject[]>> {
    const team: TeamMemberObject[] = [
        {
            imgSrc: '/assets/images/team/member1.png',
            name: 'Mohammed Mekkawy',
            role: 'Cybersecurity Analyst',
        },
        {
            imgSrc: '/assets/images/team/member2.png',
            name: 'Moataz Saleh',
            role: 'Software Manager',
        },
        {
            imgSrc: '/assets/images/team/member3.png',
            name: 'Naiera Zaki',
            role: 'Marketing Manger',
        },
    ]

    return NextResponse.json(team)
}
