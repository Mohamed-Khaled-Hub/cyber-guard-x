'use client'

// Core
import { useCallback, useEffect, useState } from 'react'
// Components
import ReviewCard from '@/src/components/CardsRelated/ReviewCard'
import OurTeamCard from '@/src/components/CardsRelated/OurTeamCard'
// Hooks
import { useCompanyData } from '@/src/providers/CompanyDataProvider'
// Types
import { ReviewObject, TeamMemberObject } from '@/src/types/objectsTypes'
// Style
import '@/src/styles/pages/about/page.css'

/* eslint-disable react-hooks/exhaustive-deps */
export default function Page() {
    // Contexts
    const { getTeam, getReviews } = useCompanyData()
    // States
    const [team, setTeam] = useState<TeamMemberObject[]>([])
    const [reviews, setReviews] = useState<ReviewObject[]>([])

    const fetchTeams = useCallback(async () => {
        const res = await getTeam()
        setTeam(res)
    }, [getTeam])

    const fetchReviews = useCallback(async () => {
        const res = await getReviews()
        setReviews(res)
    }, [getReviews])

    useEffect(() => {
        fetchTeams().then()
        fetchReviews().then()
    }, [])

    return (
        <div className='about-page'>
            {/* Who Are We */}
            <section className='who-we-are'>
                <h2>Who Are We?</h2>
                <p>
                    CyberGuardX was established to deliver comprehensive
                    solutions in software development and cybersecurity,
                    tailored to meet the evolving needs of businesses and
                    individuals across Egypt and the Arab region...
                </p>
            </section>

            {/* Reviews */}
            <section className='reviews'>
                <h2>Reviews</h2>
                <div className='reviews-container'>
                    {reviews.map((review, idx) => (
                        <ReviewCard
                            key={`review-${idx}`}
                            imgSrc={review.imgSrc}
                            name={review.name}
                            review={review.review}
                        />
                    ))}
                </div>
            </section>

            {/* Our Team */}
            <section className='our-team'>
                <h2>Our Team</h2>
                <div className='team-container'>
                    {team.map((member, idx) => (
                        <OurTeamCard
                            key={`team-${idx}`}
                            imgSrc={member.imgSrc}
                            name={member.name}
                            role={member.role}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}
