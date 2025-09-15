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
                name: 'CyberGuardX',
                desc: 'CyberGuardX was established to deliver comprehensive solutions in software development and cybersecurity, tailored to meet the evolving needs of businesses and individuals across Egypt and the Arab region.',
                slogan: 'Integrated Solutions LLC',
                logoUrl: '/assets/logo/logo.svg',
                fullLogoUrl: '/assets/logo/full-logo.svg',
                contact: {
                    emails: ['info@cyberguardx.org'],
                    phones: ['+20 01559917671', '+20 01559894768'],
                    addresses: [
                        '42 El Bahr Street, Sheraton, New Cairo',
                        '724 El Horreya Road, Loran, Alexandria',
                    ],
                },
                socials: {
                    facebook: 'https://www.facebook.com',
                    instagram: 'https://www.instagram.com',
                    linkedIn: 'https://www.linkedin.com/',
                },
                academyUrl: 'https://academy.cyberguardx.org/',
                pages: [
                    // Main pages
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/about' },

                    // On the right side of nav with special buttons
                    {
                        label: 'Services',
                        href: '/services',
                        isSpecialNav: true,
                    },
                    {
                        label: 'Contact Us',
                        href: '/contact-us',
                        isSpecialNav: true,
                    },

                    // Footer links
                    {
                        label: 'Privacy Policy',
                        href: '/privacy-policy',
                        isFooter: true,
                    },
                    {
                        label: 'Terms and Conditions',
                        href: '/terms-and-conditions',
                        isFooter: true,
                    },

                    // Services (Rendered dynamically in footer by getting it from API)
                ],
            }}
        >
            {children}
        </WebsiteInfoContext.Provider>
    )
}
