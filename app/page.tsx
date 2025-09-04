'use client'

// Core
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
// Components
import Button from '@/src/components/UIRelated/Button'
import Counter from '@/src/components/UIRelated/Counter'
import MiniServiceCard from '@/src/components/CardsRelated/MiniServiceCard'
import AnimatedSection from '@/src/components/ContainersRelated/AnimatedSection'
// Functions
import { setTitleAndDesc } from '@/src/utils/Functions'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Style
import '@/src/styles/pages/page.css'

/* eslint-disable react-hooks/exhaustive-deps */
export default function HomePage() {
    // Contexts
    const { name, desc } = useWebsiteInfo()
    // States
    const [currentIndex, setCurrentIndex] = useState(0)

    // Page Data
    const homePageData = {
        whoWeAre: {
            title: 'Who Are We?',
            text: `CyberGuardX was established to deliver comprehensive solutions 
            in software development and cybersecurity, tailored to meet the evolving 
            needs of businesses and individuals across Egypt and the Arab region.`,
            img: '/assets/images/home-page/who-are-we.png',
            button: { label: 'Learn more', href: '/about' },
        },
        whyChooseUs: {
            title: 'Why Choose Us',
            cards: [
                {
                    logo: '/assets/images/home-page/integrity.svg',
                    name: 'Integrity',
                    description:
                        'Acting with strong ethics is the foundation of trust',
                },
                {
                    logo: '/assets/images/home-page/trust.svg',
                    name: 'Trust',
                    description:
                        'Earned through honesty, consistency, and reliability',
                },
                {
                    logo: '/assets/images/home-page/accountability.svg',
                    name: 'Accountability',
                    description:
                        'Accepting responsibility for actions and decisions',
                },
            ],
        },
        ourPartners: {
            title: 'Our Partners',
            logos: [
                '/assets/images/partners/uni.svg',
                '/assets/images/partners/hue.svg',
                '/assets/images/partners/xine.svg',
                '/assets/images/partners/nti.svg',
                '/assets/images/partners/pua.svg',
                '/assets/images/partners/sn.svg',
            ],
            visibleCount: 3,
        },
        ourServices: {
            title: 'Our Services',
            cards: [
                {
                    img: '/assets/images/home-page/cyber.svg',
                    label: 'Cyber Security Services',
                    href: '/services',
                },
                {
                    img: '/assets/images/home-page/software.svg',
                    label: 'Software Services',
                    href: '/services',
                },
            ],
            button: { label: 'Explore Our Services', href: '/services' },
        },
        ourStatistics: {
            title: 'Our Statistics',
            stats: [
                { endNumber: 1000, numberFor: 'Students enrolled' },
                { endNumber: 500, numberFor: 'Projects' },
                { endNumber: 10, numberFor: 'Years in business' },
            ],
        },
    }

    // Animations
    const homePageAnimations = {
        fadeInUp: {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true, amount: 0.2 },
        },
        fadeInUpDelayed: (idx: number) => ({
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: idx * 0.2 },
            viewport: { once: true, amount: 0.2 },
        }),
    }

    // Set meta title and description
    useEffect(() => {
        setTitleAndDesc(name, desc)
    }, [])

    return (
        <div className='home-page'>
            {/* Who Are We */}
            <AnimatedSection>
                <section className='who-we-are'>
                    <motion.div
                        className='who-we-are-text'
                        initial={homePageAnimations.fadeInUp.initial}
                        whileInView={homePageAnimations.fadeInUp.whileInView}
                        transition={homePageAnimations.fadeInUp.transition}
                        viewport={homePageAnimations.fadeInUp.viewport}
                    >
                        <h2>{homePageData.whoWeAre.title}</h2>
                        <p>{homePageData.whoWeAre.text}</p>
                        <Button
                            label={homePageData.whoWeAre.button.label}
                            href={homePageData.whoWeAre.button.href}
                            variant='service'
                        />
                    </motion.div>
                    <motion.div
                        className='who-we-are-img'
                        initial={homePageAnimations.fadeInUp.initial}
                        whileInView={homePageAnimations.fadeInUp.whileInView}
                        transition={{
                            ...homePageAnimations.fadeInUp.transition,
                            delay: 0.2,
                        }}
                        viewport={homePageAnimations.fadeInUp.viewport}
                    >
                        <Image
                            width={400}
                            height={250}
                            src={homePageData.whoWeAre.img}
                            alt='Who are we'
                        />
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* Why Choose Us */}
            <AnimatedSection>
                <section className='why-choose-us'>
                    <motion.h2 {...homePageAnimations.fadeInUp}>
                        {homePageData.whyChooseUs.title}
                    </motion.h2>
                    <div className='why-choose-us-cards'>
                        {homePageData.whyChooseUs.cards.map((item, idx) => (
                            <motion.div
                                key={`mini-service-${idx}`}
                                {...homePageAnimations.fadeInUpDelayed(idx)}
                            >
                                <MiniServiceCard
                                    logo={item.logo}
                                    name={item.name}
                                    description={item.description}
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </AnimatedSection>

            {/* Our Partners */}
            <AnimatedSection>
                <section className='our-partners'>
                    <motion.h2 {...homePageAnimations.fadeInUp}>
                        {homePageData.ourPartners.title}
                    </motion.h2>
                    <div className='partners-slider'>
                        <button
                            className='partners-arrow left'
                            onClick={() =>
                                setCurrentIndex((prev) =>
                                    prev === 0
                                        ? homePageData.ourPartners.logos
                                              .length -
                                          homePageData.ourPartners.visibleCount
                                        : prev - 1
                                )
                            }
                        >
                            <MdOutlineArrowBackIos />
                        </button>

                        <div className='partners-track-wrapper'>
                            <div
                                className='partners-track'
                                style={{
                                    transform: `translateX(-${
                                        currentIndex *
                                        (100 /
                                            homePageData.ourPartners
                                                .visibleCount)
                                    }%)`,
                                }}
                            >
                                {homePageData.ourPartners.logos.map(
                                    (logo, idx) => (
                                        <div
                                            className='partner-logo'
                                            key={`partner-${idx}`}
                                        >
                                            <Image
                                                width={120}
                                                height={60}
                                                src={logo}
                                                alt={`partner-${idx}`}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <button
                            className='partners-arrow right'
                            onClick={() =>
                                setCurrentIndex((prev) =>
                                    prev >=
                                    homePageData.ourPartners.logos.length -
                                        homePageData.ourPartners.visibleCount
                                        ? 0
                                        : prev + 1
                                )
                            }
                        >
                            <MdOutlineArrowForwardIos />
                        </button>
                    </div>
                </section>
            </AnimatedSection>

            {/* Our Services */}
            <AnimatedSection>
                <section className='our-services'>
                    <motion.h2 {...homePageAnimations.fadeInUp}>
                        {homePageData.ourServices.title}
                    </motion.h2>
                    <div className='services-cards'>
                        {homePageData.ourServices.cards.map((card, idx) => (
                            <motion.div
                                key={`service-${idx}`}
                                {...homePageAnimations.fadeInUpDelayed(idx)}
                            >
                                <Link href={card.href} className='service-card'>
                                    <Image
                                        width={80}
                                        height={80}
                                        src={card.img}
                                        alt='Services icon'
                                    />
                                    <p>{card.label}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        {...homePageAnimations.fadeInUp}
                        transition={{
                            ...homePageAnimations.fadeInUp.transition,
                            delay: 0.3,
                        }}
                    >
                        <Button
                            label={homePageData.ourServices.button.label}
                            href={homePageData.ourServices.button.href}
                            variant='service'
                        />
                    </motion.div>
                </section>
            </AnimatedSection>

            {/* Our Statistics */}
            <AnimatedSection>
                <section className='our-statistics'>
                    <motion.h2 {...homePageAnimations.fadeInUp}>
                        {homePageData.ourStatistics.title}
                    </motion.h2>
                    <div className='statistics-container'>
                        {homePageData.ourStatistics.stats.map((stat, idx) => (
                            <motion.div
                                key={`stat-${idx}`}
                                {...homePageAnimations.fadeInUpDelayed(idx)}
                            >
                                <Counter
                                    endNumber={stat.endNumber}
                                    numberFor={stat.numberFor}
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </AnimatedSection>
        </div>
    )
}
