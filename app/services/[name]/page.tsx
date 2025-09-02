// Core
import { use } from 'react'
// Functions
import { fromKebabCase } from '@/src/utils/Functions'
// Types
import { ServicesPageParamsType } from '@/src/types/propsTypes'

export default function Page({ params }: ServicesPageParamsType) {
    // Get NAME /services/:name
    const { name: serviceName } = use(params)

    return (
        <div className='service-page'>
            <p>Service: {fromKebabCase(serviceName)}</p>
        </div>
    )
}
