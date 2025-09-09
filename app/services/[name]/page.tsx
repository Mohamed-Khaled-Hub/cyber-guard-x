'use client'

// Core
import Image from 'next/image'
import { motion } from 'framer-motion'
import { use, useCallback, useEffect, useState } from 'react'
// Components
import Loader from '@/src/components/UIRelated/Loader'
import Button from '@/src/components/UIRelated/Button'
// Hooks
import { useCompanyData } from '@/src/providers/CompanyDataProvider'
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Functions
import { renderClasses, setMetadata } from '@/src/utils/Functions'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'
import { ServicesPageParamsType } from '@/src/types/propsTypes'
// Style
import '@/src/styles/pages/services/[name]/page.css'

/* eslint-disable react-hooks/exhaustive-deps */
export default function ServiceByNamePage({ params }: ServicesPageParamsType) {
    // Get NAME /services/:name
    const { name: serviceName } = use(params)
    // Contexts
    const { getServiceByName } = useCompanyData()
    const { name } = useWebsiteInfo()
    // States
    const [service, setService] = useState<ServiceObject | null>(null)

    const fetchData = useCallback(async () => {
        const res = await getServiceByName(serviceName)
        setService(res)
    }, [serviceName, getServiceByName])

    useEffect(() => {
        fetchData().then()
    }, [])

    useEffect(() => {
        if (service) {
            setMetadata(`${service.name} | ${name}`, service.description, [
                service.name,
                `${service.name} service`,
                `${name.toLowerCase()} ${service.name}`,
                'cybersecurity',
                'software development',
                'IT consulting',
            ])
        }
    }, [service, name])

    // Show loader while fetching
    if (service === null) {
        return <Loader />
    }

    // Page Data
    const servicePageData = {
        headings: {
            whatIs: 'What Is',
            offers: 'What we can offer ?',
        },
        button: {
            order: 'Order this service',
            href: '/contact-us',
        },
    }

    // Animations
    const servicePageAnimations = {
        fadeInUp: {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true, amount: 0.3 },
        },
        staggered: (idx: number) => ({
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: idx * 0.2 },
            viewport: { once: true, amount: 0.3 },
        }),
    }

    return (
        <div className='service-page'>
            {service && (
                <>
                    {/* Title */}
                    <motion.h1
                        className='service-title'
                        initial={servicePageAnimations.fadeInUp.initial}
                        whileInView={servicePageAnimations.fadeInUp.whileInView}
                        transition={servicePageAnimations.fadeInUp.transition}
                        viewport={servicePageAnimations.fadeInUp.viewport}
                    >
                        {servicePageData.headings.whatIs} {service.name}
                    </motion.h1>

                    {/* Intro Section */}
                    <motion.div
                        className='service-info'
                        initial={servicePageAnimations.fadeInUp.initial}
                        whileInView={servicePageAnimations.fadeInUp.whileInView}
                        transition={servicePageAnimations.fadeInUp.transition}
                        viewport={servicePageAnimations.fadeInUp.viewport}
                    >
                        <Image
                            width={600}
                            height={400}
                            src={service.imgSrc}
                            alt={service.name + ' image'}
                            placeholder='blur'
                            blurDataURL='/assets/images/placeholder.jpg'
                        />
                        <p>{service.description}</p>
                    </motion.div>

                    {/* Extra Info Sections */}
                    {service.extraInfo?.map((info, idx) => (
                        <motion.div
                            key={`info-${idx}`}
                            className={renderClasses(
                                'service-info',
                                idx % 2 === 0 ? 'reversed' : ''
                            )}
                            initial={
                                servicePageAnimations.staggered(idx).initial
                            }
                            whileInView={
                                servicePageAnimations.staggered(idx).whileInView
                            }
                            transition={
                                servicePageAnimations.staggered(idx).transition
                            }
                            viewport={
                                servicePageAnimations.staggered(idx).viewport
                            }
                        >
                            <Image
                                width={600}
                                height={400}
                                src={info.imgSrc}
                                alt={service.name + ' image'}
                                placeholder='blur'
                                blurDataURL='/assets/images/placeholder.jpg'
                            />
                            <p>{info.description}</p>
                        </motion.div>
                    ))}

                    {/* What We Can Offer */}
                    <motion.div
                        className='what-we-can-offer'
                        initial={servicePageAnimations.fadeInUp.initial}
                        whileInView={servicePageAnimations.fadeInUp.whileInView}
                        transition={servicePageAnimations.fadeInUp.transition}
                        viewport={servicePageAnimations.fadeInUp.viewport}
                    >
                        <h2>{servicePageData.headings.offers}</h2>
                        <div className='offers-container'>
                            {service.whatWeCanOffer?.map((offer, idx) => (
                                <motion.div
                                    className='offer'
                                    key={`what-we-can-offer-${idx}`}
                                    initial={
                                        servicePageAnimations.staggered(idx)
                                            .initial
                                    }
                                    whileInView={
                                        servicePageAnimations.staggered(idx)
                                            .whileInView
                                    }
                                    transition={
                                        servicePageAnimations.staggered(idx)
                                            .transition
                                    }
                                    viewport={
                                        servicePageAnimations.staggered(idx)
                                            .viewport
                                    }
                                >
                                    <Image
                                        width={200}
                                        height={200}
                                        src={offer.imgSrc}
                                        alt={offer.name + ' image'}
                                        placeholder='blur'
                                        blurDataURL='/assets/images/placeholder.jpg'
                                    />
                                    <h3>{offer.name}</h3>
                                    <p>{offer.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        <Button
                            label={servicePageData.button.order}
                            href={servicePageData.button.href}
                            variant='service'
                        />
                    </motion.div>
                </>
            )}
        </div>
    )
}
