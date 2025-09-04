'use client'

// Core
import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
// Components
import ServiceCard from '@/src/components/CardsRelated/ServiceCard'
// Hooks
import { useCompanyData } from '@/src/providers/CompanyDataProvider'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'
// Styles
import '@/src/styles/pages/services/page.css'

/* eslint-disable react-hooks/exhaustive-deps */
export default function Page() {
    // Contexts
    const { getServices } = useCompanyData()
    // States
    const [services, setServices] = useState<ServiceObject[]>([])

    const fetchData = useCallback(async () => {
        const res = await getServices()
        setServices(res)
    }, [getServices])

    useEffect(() => {
        fetchData().then()
    }, [])

    // Filters
    const cyberServices = services.filter((s) => s.type === 'cyber')
    const softwareServices = services.filter((s) => s.type === 'software')

    // Page Data
    const servicesPageData = {
        cyber: { title: 'Our Cyber Security Services' },
        software: { title: 'Our Software Services' },
    }

    // Animations
    const servicesAnimations = {
        container: {
            hidden: {},
            visible: {
                transition: { staggerChildren: 0.15 },
            },
        },
        card: {
            hidden: { opacity: 0, y: 40 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
            },
        },
    }

    return (
        <div className='services-page'>
            {/* CyberSecurity */}
            <section className='services-section'>
                <h2 className='services-title'>
                    {servicesPageData.cyber.title}
                </h2>
                {cyberServices.length > 0 && (
                    <motion.div
                        className='services-grid'
                        variants={servicesAnimations.container}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {cyberServices.map((service, idx) => (
                            <motion.div
                                key={`cyber-${idx}`}
                                variants={servicesAnimations.card}
                            >
                                <ServiceCard
                                    logo={service.logo}
                                    name={service.name}
                                    description={service.description}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </section>

            {/* Software */}
            <section className='services-section'>
                <h2 className='services-title'>
                    {servicesPageData.software.title}
                </h2>
                {softwareServices.length > 0 && (
                    <motion.div
                        className='services-grid'
                        variants={servicesAnimations.container}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {softwareServices.map((service, idx) => (
                            <motion.div
                                key={`software-${idx}`}
                                variants={servicesAnimations.card}
                            >
                                <ServiceCard
                                    logo={service.logo}
                                    name={service.name}
                                    description={service.description}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </section>
        </div>
    )
}
