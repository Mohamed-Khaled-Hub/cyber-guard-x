// Core
import { use } from 'react'
// Types
import { ServicesPageParamsType } from '@/src/types/propsTypes'

export default function Page({ params }: ServicesPageParamsType) {
    // Get NAME /services/:name
    const { name } = use(params)

    return (
        <div className='service-page'>
            <p>Service: {name}</p>
        </div>
    )
}
