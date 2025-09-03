'use client'

// Core
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
// Hooks
import { useCompanyData } from '@/src/providers/CompanyDataProvider'
// Components
import ReviewCard from '@/src/components/CardsRelated/ReviewCard'
import OurTeamCard from '@/src/components/CardsRelated/OurTeamCard'
// Types
import { ReviewObject, TeamMemberObject } from '@/src/types/objectsTypes'
// Style
import '@/src/styles/pages/about/page.css'

/* eslint-disable react-hooks/exhaustive-deps */
export default function Page() {
    // Contexts
    const { getTeam, getReviews } = useCompanyData()
    // States
    const [current, setCurrent] = useState(0)
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

    const handleNext = () => setCurrent((prev) => prev + 1)
    const handlePrev = () => setCurrent((prev) => prev - 1)

    return (
        <div className='about-page'>
            {/* Who Are We */}
            <section className='who-we-are'>
                <div className='who-we-are-img'>
                    <Image
                        src='/assets/images/who-we-are.svg'
                        alt='Team meeting'
                        fill
                        className='object-cover'
                        priority
                    />
                </div>
                <div className='who-we-are-text'>
                    <h2>Who Are We ?</h2>
                    <p>
                        CyberGuardX was established to deliver comprehensive
                        solutions in software development and cybersecurity,
                        tailored to meet the evolving needs of businesses and
                        individuals across Egypt and the Arab region.
                        <br />
                        We empower organizations through smart applications,
                        advanced systems, and high-level cybersecurity services
                        that ensure digital transformation with confidence and
                        safety.
                    </p>
                </div>
            </section>

            {/* Reviews */}
            {reviews && reviews.length > 0 && (
                <section className='reviews'>
                    <h2>Reviews</h2>
                    <div className='reviews-slider'>
                        <button
                            onClick={handlePrev}
                            className='reviews-arrow left'
                        >
                            <MdOutlineArrowBackIos />
                        </button>

                        <div className='reviews-track-wrapper'>
                            <div className='reviews-track'>
                                {[-1, 0, 1].map((offset) => {
                                    const index =
                                        (current + offset + reviews.length) %
                                        reviews.length
                                    const review = reviews[index]
                                    const isCenter = offset === 0

                                    return (
                                        <div
                                            key={`${index}-${offset}`}
                                            className={`review-slide ${
                                                isCenter ? 'active' : 'inactive'
                                            }`}
                                        >
                                            <ReviewCard
                                                imgSrc={review.imgSrc}
                                                name={review.name}
                                                review={review.review}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <button
                            onClick={handleNext}
                            className='reviews-arrow right'
                        >
                            <MdOutlineArrowForwardIos />
                        </button>
                    </div>
                </section>
            )}

            {/* Our Team */}
            {team && team.length > 0 && (
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
            )}
        </div>
    )
}
