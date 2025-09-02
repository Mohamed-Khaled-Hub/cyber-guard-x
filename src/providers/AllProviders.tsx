'use client'

// Providers
import { WebsiteInfoProvider } from '@/src/providers/WebsiteInfoProvider'
import { CompanyDataProvider } from '@/src/providers/CompanyDataProvider'
// Types
import { AllProvidersProps } from '@/src/types/propsTypes'

export default function AllProviders({ children }: AllProvidersProps) {
    return (
        <>
            <WebsiteInfoProvider>
                <CompanyDataProvider>{children}</CompanyDataProvider>
            </WebsiteInfoProvider>
        </>
    )
}
