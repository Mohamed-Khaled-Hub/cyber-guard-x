'use client'

// Core
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
// Functions
import { toKebabCase } from '@/src/utils/Functions'
// Hooks
import { useCompanyData } from '@/src/providers/CompanyDataProvider'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'

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

    return (
        <div>
            <h1>Services</h1>
            <div className='grid grid-cols-4 gap-2'>
                {services.length > 0 &&
                    services.map((service, idx) => (
                        <Link
                            href={`/services/${toKebabCase(service.name)}`}
                            key={`service-${idx}`}
                            className='border-2 border-neutral-300 p-4 rounded-lg shadow-md'
                        >
                            <h2 className='font-bold'>{service.name}</h2>
                            <p className='truncate'>{service.description}</p>
                        </Link>
                    ))}
            </div>
        </div>
    )
}
