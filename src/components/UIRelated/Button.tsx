'use client'

// Core
import Link from 'next/link'
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
// Functions
import { renderClasses } from '@/src/utils/Functions'
// Types
import { ButtonProps } from '@/src/types/propsTypes'
// Style
import '@/src/styles/components/UIRelated/Button.css'

export default function Button({
    variant = 'primary',
    label,
    href,
    ...props
}: ButtonProps) {
    const className = renderClasses('btn', `btn-${variant}`)

    if (href) {
        return (
            <Link
                href={href}
                className={className}
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {label}
            </Link>
        )
    }

    return (
        <button
            className={className}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {label}
        </button>
    )
}
