// Core
import {
    PropsWithChildren,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    ButtonHTMLAttributes,
    AnchorHTMLAttributes,
} from 'react'
import {
    ReviewObject,
    ServiceObject,
    TeamMemberObject,
} from '@/src/types/objectsTypes'

// Layouts
export type LayoutProps = PropsWithChildren

// Components
export type ContainerProps = PropsWithChildren & {
    noPadding?: boolean
    addMargin?: boolean
    className?: string
}

export type MainProps = PropsWithChildren & {
    navFixed?: boolean
}

export type InputProps = {
    label?: string
    error?: string
    as?: 'input' | 'textarea'
    onChangeAction: (value: string) => void
} & Omit<
    InputHTMLAttributes<HTMLInputElement> &
        TextareaHTMLAttributes<HTMLTextAreaElement>,
    'onChange'
>

export type CounterProps = {
    endNumber: number
    numberFor: string
}

// Button Types (Handling render it as <a> or <button>)
export type CommonButtonProps = {
    variant?: 'primary' | 'secondary' | 'gradient' | 'service'
    label: string
}

// Button-only props
export type ButtonOnlyProps = CommonButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined
    }

// Link-only props
export type LinkOnlyProps = CommonButtonProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string
    }

export type ButtonProps = ButtonOnlyProps | LinkOnlyProps

// Cards
export type OurTeamCardProps = TeamMemberObject

export type ReviewCardProps = ReviewObject

export type ServiceCardProps = Omit<ServiceObject, 'imgSrc' | 'type'>

export type MiniServiceCardProps = Omit<ServiceObject, 'imgSrc' | 'type'>

// Sliders
export type ReviewsCarouselProps = { reviews: ReviewObject[] }

export type PartnersSliderProps = {
    logos: string[]
    visibleCount: number
}

// Providers
export type AllProvidersProps = PropsWithChildren

export type WebsiteInfoProviderProps = PropsWithChildren

export type CompanyDataProviderProps = PropsWithChildren

export type ContactProviderProps = PropsWithChildren

export type AnimatedSectionProps = PropsWithChildren & {
    className?: string
}

// Dynamic Page
export type ServicesPageParamsType = {
    params: Promise<{ name: string }>
}

// Routes
export type GetServiceRouteParamsType = {
    params: Promise<{ name: string }>
}
