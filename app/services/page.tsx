'use client'

// Core
import { useCallback, useEffect, useState } from 'react'
// Hooks
import { useCompanyData } from '@/src/providers/CompanyDataProvider'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'
// Components
import ServiceCard from '@/src/components/CardsRelated/ServiceCard'

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

    return (
        <div className='space-y-12 mb-16'>
            {/* Cyber Security */}
            <section>
                <h2 className='text-2xl font-semibold mb-6 mt-15 text-center'>
                    Our Cyber Security Services
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {cyberServices.map((service, idx) => (
                        <ServiceCard
                            key={`cyber-${idx}`}
                            logo={service.logo}
                            name={service.name}
                            description={service.description}
                        />
                    ))}
                </div>
            </section>

            {/* Software */}
            <section>
                <h2 className='text-2xl font-semibold mb-6 mt-4 text-center'>
                    Our Software Services
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {softwareServices.map((service, idx) => (
                        <ServiceCard
                            key={`software-${idx}`}
                            logo={service.logo}
                            name={service.name}
                            description={service.description}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}
