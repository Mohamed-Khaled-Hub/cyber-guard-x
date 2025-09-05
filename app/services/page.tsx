// Core
import { Suspense } from 'react'
// Components
import Loader from '@/src/components/UIRelated/Loader'
// Pages
import ServicesPage from '@/app/services/ServicesPage'

export default function Page() {
    return (
        <Suspense fallback={<Loader />}>
            <ServicesPage />
        </Suspense>
    )
}
