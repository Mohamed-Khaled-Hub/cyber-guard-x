'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { useCompanyData } from '@/src/providers/CompanyDataProvider'
import ReviewCard from '@/src/components/CardsRelated/ReviewCard'
import OurTeamCard from '@/src/components/CardsRelated/OurTeamCard'
import { ReviewObject, TeamMemberObject } from '@/src/types/objectsTypes'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/* eslint-disable react-hooks/exhaustive-deps */
export default function Page() {
    const { getTeam, getReviews } = useCompanyData()
    const [team, setTeam] = useState<TeamMemberObject[]>([])
    const [reviews, setReviews] = useState<ReviewObject[]>([])
    const [current, setCurrent] = useState(0)

    const fetchTeams = useCallback(async () => {
        const res = await getTeam()
        setTeam(res)
    }, [getTeam])

    const fetchReviews = useCallback(async () => {
        const res = await getReviews()
        setReviews(res)
    }, [getReviews])

    useEffect(() => {
        fetchTeams()
        fetchReviews()
    }, [])

    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
    const nextSlide = () =>
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))

    return (
        <div className='max-w-7xl mx-auto px-4 py-12 space-y-16'>
            {/* Who Are We */}
            <section className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                <div className='relative w-full h-80 md:h-[400px]'>
                    <Image
                        src='/assets/images/who-we-are.svg'
                        alt='Team meeting'
                        fill
                        className='object-cover rounded-xl shadow-lg'
                        priority
                    />
                </div>

                <div className='bg-gradient-to-r from-purple-700 to-blue-500 text-white p-8 rounded-xl shadow-lg'>
                    <h2 className='text-2xl font-bold mb-4'>Who Are We ?</h2>
                    <p className='text-base leading-relaxed'>
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
            <section>
                <h2 className='text-center text-2xl font-bold mb-8'>Reviews</h2>
                <div className='relative flex items-center justify-center max-w-6xl mx-auto'>
                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className='absolute -left-16 z-20 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out'
                        disabled={reviews.length === 0}
                    >
                        <ChevronLeft className='w-6 h-6 text-gray-700' />
                    </button>

                    {/* Slider Container */}
                    <div className='overflow-hidden w-full'>
                        <div className='flex items-center justify-center min-h-[400px]'>
                            {reviews.length > 0 && (
                                <div 
                                    className='flex transition-transform duration-500 ease-in-out items-center gap-8'
                                    style={{
                                        transform: `translateX(-${current * 0}px)`,
                                        width: 'fit-content'
                                    }}
                                >
                                    {/* Show 3 cards: previous, current, next */}
                                    {[-1, 0, 1].map((offset) => {
                                        const index = (current + offset + reviews.length) % reviews.length
                                        const review = reviews[index]
                                        const isCenter = offset === 0
                                        
                                        return (
                                            <div
                                                key={`${index}-${offset}`}
                                                className={`transition-all duration-500 ease-in-out transform flex-shrink-0 ${
                                                    isCenter 
                                                        ? 'scale-110 z-10 opacity-100' 
                                                        : 'scale-85 opacity-50 hover:opacity-70'
                                                }`}
                                                style={{
                                                    width: isCenter ? '340px' : '300px',
                                                    margin: isCenter ? '0 16px' : '0 8px'
                                                }}
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
                            )}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className='absolute -right-16 z-20 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out'
                        disabled={reviews.length === 0}
                    >
                        <ChevronRight className='w-6 h-6 text-gray-700' />
                    </button>
                </div>
            </section>

            {/* Our Team */}
            <section>
                <h2 className='text-center text-2xl font-bold mb-8'>
                    Our Team
                </h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto'>
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
