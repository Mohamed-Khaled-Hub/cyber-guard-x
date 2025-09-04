'use client'

// Core
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
// Components
import Loader from '@/src/components/UIRelated/Loader'
import OurTeamCard from '@/src/components/CardsRelated/OurTeamCard'
import ReviewsCarousel from '@/src/components/SlidersRelated/ReviewsCarousel'
import AnimatedSection from '@/src/components/ContainersRelated/AnimatedSection'
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
    const [team, setTeam] = useState<TeamMemberObject[] | null>(null)
    const [reviews, setReviews] = useState<ReviewObject[] | null>(null)

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

    // Show loader while fetching
    if (team === null || reviews === null) {
        return <Loader />
    }

    // Page Data
    const aboutPageData = {
        whoWeAre: {
            title: 'Who Are We ?',
            description: `CyberGuardX was established to deliver comprehensive solutions in software development and cybersecurity, tailored to meet the evolving needs of businesses and individuals across Egypt and the Arab region.
        
We empower organizations through smart applications, advanced systems, and high-level cybersecurity services that ensure digital transformation with confidence and safety.`,
            image: {
                src: '/assets/images/who-we-are.svg',
                alt: 'Team meeting',
            },
        },
        reviews: {
            title: 'Reviews',
        },
        team: {
            title: 'Our Team',
        },
    }

    // Animations
    const animations = {
        whoWeAreImg: {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
        },
        whoWeAreText: {
            initial: { opacity: 0, x: 50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
        },
        reviewsHeading: {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.5 },
            viewport: { once: true },
        },
        teamHeading: {
            initial: { opacity: 0, y: -30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true },
        },
        teamCard: (idx: number) => ({
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: idx * 0.2 },
            viewport: { once: true },
        }),
    }

    return (
        <div className='about-page'>
            {/* Who Are We */}
            <AnimatedSection>
                <section className='who-we-are'>
                    <motion.div
                        className='who-we-are-img'
                        {...animations.whoWeAreImg}
                    >
                        <Image
                            src={aboutPageData.whoWeAre.image.src}
                            alt={aboutPageData.whoWeAre.image.alt}
                            fill
                            className='object-cover'
                            priority
                        />
                    </motion.div>

                    <motion.div
                        className='who-we-are-text'
                        {...animations.whoWeAreText}
                    >
                        <h2>{aboutPageData.whoWeAre.title}</h2>
                        <p>{aboutPageData.whoWeAre.description}</p>
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* Reviews */}
            {reviews && reviews.length > 0 && (
                <AnimatedSection>
                    <section className='reviews'>
                        <motion.h2 {...animations.reviewsHeading}>
                            {aboutPageData.reviews.title}
                        </motion.h2>
                        <ReviewsCarousel reviews={reviews} />
                    </section>
                </AnimatedSection>
            )}

            {/* Our Team */}
            {team && team.length > 0 && (
                <AnimatedSection>
                    <section className='our-team'>
                        <motion.h2 {...animations.teamHeading}>
                            {aboutPageData.team.title}
                        </motion.h2>
                        <div className='team-container'>
                            {team.map((member, idx) => (
                                <motion.div
                                    key={`team-${idx}`}
                                    {...animations.teamCard(idx)}
                                >
                                    <OurTeamCard
                                        imgSrc={member.imgSrc}
                                        name={member.name}
                                        role={member.role}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </AnimatedSection>
            )}
        </div>
    )
}
