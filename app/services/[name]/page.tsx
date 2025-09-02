'use client'

// Core
import { use, useCallback, useEffect, useState } from 'react'
// Hooks
import { useCompanyData } from '@/src/providers/CompanyDataProvider'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'
import { ServicesPageParamsType } from '@/src/types/propsTypes'
import Image from 'next/image'

/* eslint-disable react-hooks/exhaustive-deps */
export default function Page({ params }: ServicesPageParamsType) {
    // Get NAME /services/:name
    const { name: serviceName } = use(params)
    // Contexts
    const { getServiceByName } = useCompanyData()
    // States
    const [service, setService] = useState<ServiceObject | null>(null)

    const fetchData = useCallback(async () => {
        const res = await getServiceByName(serviceName)
        setService(res)
    }, [getServiceByName])

    useEffect(() => {
        fetchData().then()
    }, [])

    return (
        <div className='service-page'>
            {service && (
                <>
                    <h1 className='text-lg font-bold'>{service.name}</h1>
                    <div className='flex py-4 rounded-lg gap-4'>
                        <Image
                            width={500}
                            height={500}
                            src={service.imgSrc}
                            alt={service.name + ' image'}
                        />
                        <p>{service.description}</p>
                    </div>
                    {service.extraInfo?.map((info, idx) => (
                        <div
                            key={`info-${idx}`}
                            className={`flex p-4 rounded-lg ${idx % 2 === 0 ? 'flex-row-reverse bg-neutral-300' : 'flex-row'} gap-4`}
                        >
                            <Image
                                width={500}
                                height={500}
                                src={info.imgSrc}
                                alt={service.name + ' image'}
                            />
                            <p>{info.description}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}
