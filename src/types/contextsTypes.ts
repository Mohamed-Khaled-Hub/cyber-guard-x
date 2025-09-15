// Types
import {
    ReviewObject,
    ServiceObject,
    TeamMemberObject,
    SMTPGoogleResponse,
} from '@/src/types/objectsTypes'

// Website's Info (name, desc, phones, ...etc)
export type WebsiteInfoContextType = {
    // Core info
    name: string
    desc: string

    // Branding
    slogan: string
    logoUrl: string
    fullLogoUrl: string

    // Contact Us Info
    contact: {
        emails: string[]
        phones: string[]
        addresses: string[]
    }

    // Social Media Links
    socials: {
        facebook?: string
        instagram?: string
        linkedIn?: string
    }

    // Other Related links
    academyUrl: string

    // Pages (for nav/footer/etc.)
    pages: {
        label: string
        href: string
        isFooter?: boolean
        isSpecialNav?: boolean
    }[]
}

export type CompanyDataContextType = {
    getTeam: () => Promise<TeamMemberObject[]>
    getReviews: () => Promise<ReviewObject[]>
    getServices: () => Promise<ServiceObject[]>
    getServiceByName: (name: string) => Promise<ServiceObject | null>
}

export type ContactContextType = {
    sendContactMessage: (formData: {
        firstName: string
        lastName: string
        email: string
        phone?: string
        message: string
    }) => Promise<SMTPGoogleResponse>
}
