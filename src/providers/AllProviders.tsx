'use client'

// Providers
import { WebsiteInfoProvider } from '@/src/providers/WebsiteInfoProvider'
// Types
import { AllProvidersProps } from '@/src/types/propsTypes'

export default function AllProviders({ children }: AllProvidersProps) {
    return (
        <>
            <WebsiteInfoProvider>{children}</WebsiteInfoProvider>
        </>
    )
}
