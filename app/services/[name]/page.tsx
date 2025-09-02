'use client'

// Core
import { use, useEffect } from 'react'
// Hooks
import { useCompanyData } from '@/src/providers/CompanyDataProvider'
// Types
import { ServicesPageParamsType } from '@/src/types/propsTypes'

/* eslint-disable react-hooks/exhaustive-deps */
export default function Page({ params }: ServicesPageParamsType) {
    // Get NAME /services/:name
    const { name: serviceName } = use(params)
    // Contexts
    const { getServiceByName } = useCompanyData()

    useEffect(() => {
        const fetchData = async () => {
            const service = await getServiceByName(serviceName)
            console.log(service)
        }
        fetchData().then()
    }, [])

    return (
        <div className='service-page'>
            <p>Service: {serviceName}</p>
        </div>
    )
}
