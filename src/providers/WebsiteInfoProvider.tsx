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
                    { label: 'About', href: '/about' },
                    {
                        label: 'Software Systems',
                        href: '/software-systems',
                    },
                    { label: 'Services', href: '/services', isNotInNav: true },
                    { label: 'Contact Us', href: '/contact', isNotInNav: true },
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
                        label: 'Web Penetration Testing',
                        href: '/services/web-penetration-testing',
                        isService: true,
                    },
                    {
                        label: 'Network Penetration Testing',
                        href: '/services/network-penetration-testing',
                        isService: true,
                    },
                    {
                        label: 'Auditing',
                        href: '/services/auditing',
                        isService: true,
                    },
                    {
                        label: 'GRC',
                        href: '/services/grc',
                        isService: true,
                    },
                    {
                        label: 'SOC As a Service',
                        href: '/services/soc',
                        isService: true,
                    },
                    {
                        label: 'Mobile Penetration Testing',
                        href: '/services/mobile-penetraion-testing',
                        isService: true,
                    },
                    {
                        label: 'SaaS Solutions',
                        href: '/services/saas',
                        isService: true,
                    },
                    {
                        label: 'Customized Software Development',
                        href: '/services/customized-software-development',
                        isService: true,
                    },
                    {
                        label: 'Maintenance & Support',
                        href: '/services/maintenance-and-support',
                        isService: true,
                    },
                    {
                        label: 'AI & Automation Services',
                        href: '/services/ai-and-automation',
                        isService: true,
                    },
                    {
                        label: 'Cloud Solutions & Integration',
                        href: '/services/clouad-and-integrations',
                        isService: true,
                    },
                    {
                        label: 'Web Application Development',
                        href: '/services/web-app-dev',
                        isService: true,
                    },
                    

                ],
            }}
        >
            {children}
        </WebsiteInfoContext.Provider>
    )
}
