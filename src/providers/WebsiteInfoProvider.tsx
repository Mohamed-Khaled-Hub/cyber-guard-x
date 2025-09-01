// Core
import { useContext } from 'react'
// Contexts
import { WebsiteInfoContext } from '@/src/contexts/Contexts'
// Types
import { WebsiteInfoProviderProps } from '@/src/types/propsTypes'

// Hook
export const useWebsiteInfo = () => useContext(WebsiteInfoContext)

// Provider
export function WebsiteInfoProvider({ children }: WebsiteInfoProviderProps) {
    return (
        <WebsiteInfoContext.Provider
            value={{
                name: 'CyberGuard X',
                desc: 'CyberGuardX was established to deliver comprehensive solutions in software development and cybersecurity, tailored to meet the evolving needs of businesses and individuals across Egypt and the Arab region.',
                slogan: 'Integrated Solutions LLC',
                logoUrl: '/assets/logo/logo.svg',
                fullLogoUrl: '/assets/logo/full-logo.svg',
                contact: {
                    emails: ['info@cyberguardx.org'],
                    phones: ['+20 01559917671', '+20 01559894768'],
                    addresses: [
                        '42 Elbahr Street, Sheraton, New Cairo',
                        '724 Elhorya road, Loran, Alexandria',
                    ],
                },
                socials: {
                    facebook: 'https://www.facebook.com',
                    instagram: 'https://www.instagram.com',
                    linkedIn: 'https://www.linkedin.com/',
                },
                pages: [
                    { label: 'Home', href: '/' },
                    {
                        label: 'Privacy Policy',
                        href: '/privacy',
                        isFooter: true,
                    },
                    {
                        label: 'Terms and Conditions',
                        href: '/terms',
                        isFooter: true,
                    },
                    {
                        label: 'Penetration Testing',
                        href: '/service/:id',
                        isService: true,
                    },
                ],
            }}
        >
            {children}
        </WebsiteInfoContext.Provider>
    )
}
