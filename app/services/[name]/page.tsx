'use client'

// Core
import Image from 'next/image'
import { use, useCallback, useEffect, useState } from 'react'
// Hooks
import { useCompanyData } from '@/src/providers/CompanyDataProvider'
// Functions
import { renderClasses } from '@/src/utils/Functions'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'
import { ServicesPageParamsType } from '@/src/types/propsTypes'
// Style
import '@/src/styles/pages/services/[name]/page.css'
import Button from '@/src/components/UIRelated/Button'

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
                    <h1 className='service-title'>What Is {service.name}</h1>
                    <div className='service-info'>
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
                            className={renderClasses(
                                'service-info',
                                idx % 2 === 0 ? 'reversed' : ''
                            )}
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

                    <div className='what-we-can-offer'>
                        <h2>What we can offer ?</h2>
                        <div className='offers-container'>
                            {service.whatWeCanOffer?.map((offer, idx) => (
                                <div
                                    className='offer'
                                    key={`what-we-can-offer-${idx}`}
                                >
                                    <Image
                                        width={200}
                                        height={200}
                                        src={offer.imgSrc}
                                        alt={offer.name + ' image'}
                                    />
                                    <h3>{offer.name}</h3>
                                    <p>{offer.description}</p>
                                </div>
                            ))}
                        </div>
                        <Button
                            label={'Order this service'}
                            variant='service'
                        />
                    </div>
                </>
            )}
        </div>
    )
}
