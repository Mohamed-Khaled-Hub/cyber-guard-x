// Core
import {
    PropsWithChildren,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    ButtonHTMLAttributes,
    AnchorHTMLAttributes,
} from 'react'

// Layouts
export type RootLayoutProps = PropsWithChildren

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

// -------Cards--------

// our team card
export type OurTeamCardProps = {
    imgSrc: string
    name: string
    role: string
}

// review card
export type ReviewCardProps = {
    imgSrc: string;
    name: string;
    review: string
}

// service card
export type ServiceCardProps = {
    imgSrc: string;
    name: string;
    description: string;
};

// Mini Service card

export type MiniServiceCardProps = {
    imgSrc: string;
    title: string;      // e.g. "Trust and Integrity"
    description: string;
  };

// Providers
export type AllProvidersProps = PropsWithChildren

export type WebsiteInfoProviderProps = PropsWithChildren

export type CompanyDataProviderProps = PropsWithChildren

// Dynamic Page
export type ServicesPageParamsType = {
    params: Promise<{ name: string }>
}
