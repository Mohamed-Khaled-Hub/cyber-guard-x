'use client'

// Core
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronRight, FiChevronDown } from 'react-icons/fi'
// Components
import Button from '@/src/components/UIRelated/Button'
import Container from '@/src/components/ContainersRelated/Container'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
import { useCompanyData } from '@/src/providers/CompanyDataProvider'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'
// Style
import '@/src/styles/components/NavRelated/Nav.css'

export default function Nav() {
    // Contexts
    const { name, pages, logoUrl } = useWebsiteInfo()
    const { getServices } = useCompanyData()

    // States
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [services, setServices] = useState<ServiceObject[]>([])
    const [showServices, setShowServices] = useState(false)
    const [showPenTesting, setShowPenTesting] = useState(false)

    // Scroll state
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 120)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Fetch services once
    useEffect(() => {
        getServices().then(setServices)
    }, [getServices])

    // Animations
    const logoAnimations = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
        transition: { duration: 0.3 },
    }

    const serviceDropdownAnimations = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.2 },
    }

    const Arrow = ({ open }: { open: boolean }) =>
        open ? (
            <FiChevronDown className='ml-2 transition-transform' />
        ) : (
            <FiChevronRight className='ml-2 transition-transform' />
        )

    // Shared render for Penetration Testing submenu
    const renderPenTestingLinks = (isMobile = false) => (
        <>
            <Link
                href='/services/mobile-penetration-testing'
                className={isMobile ? 'mobile-link' : 'service-item'}
                onClick={() => isMobile && setMenuOpen(false)}
            >
                Mobile Penetration Testing
            </Link>
            <Link
                href='/services/network-penetration-testing'
                className={isMobile ? 'mobile-link' : 'service-item'}
                onClick={() => isMobile && setMenuOpen(false)}
            >
                Network Penetration Testing
            </Link>
            <Link
                href='/services/web-penetration-testing'
                className={isMobile ? 'mobile-link' : 'service-item'}
                onClick={() => isMobile && setMenuOpen(false)}
            >
                Web Penetration Testing
            </Link>
        </>
    )

    // Shared render for "other services" + explore link
    const renderExtraServices = (isMobile = false) => (
        <>
            {services
                .filter(
                    (s) =>
                        ![
                            'Web Penetration Testing',
                            'Mobile Penetration Testing',
                            'Network Penetration Testing',
                        ].includes(s.name)
                )
                .slice(0, 4)
                .map((service, idx) => (
                    <Link
                        key={`service-${idx}`}
                        href={`/services/${service.name}`}
                        className={isMobile ? 'mobile-link' : 'service-item'}
                        onClick={() => isMobile && setMenuOpen(false)}
                    >
                        {service.name}
                    </Link>
                ))}

            <Link
                href={
                    pages.find((p) => p.label.toLowerCase() === 'services')!
                        .href
                }
                className={
                    (isMobile ? 'mobile-link' : 'service-item') +
                    ' underline underline-offset-2'
                }
                onClick={() => isMobile && setMenuOpen(false)}
            >
                Explore our services
            </Link>
        </>
    )

    return (
        <nav className='nav'>
            <Container addMargin>
                <div className='nav-inner'>
                    {/* Left side - Logo */}
                    <div className='nav-actions'>
                        <Link href='/'>
                            <AnimatePresence mode='wait' initial={false}>
                                {scrolled ? (
                                    <motion.div
                                        key='full-logo'
                                        {...logoAnimations}
                                    >
                                        <Image
                                            src='/assets/logo/full-logo.svg'
                                            alt={`${name} full logo`}
                                            width={140}
                                            height={40}
                                            priority
                                        />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key='small-logo'
                                        {...logoAnimations}
                                    >
                                        <Image
                                            src={logoUrl}
                                            alt={`${name} logo`}
                                            width={40}
                                            height={40}
                                            priority
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Link>
                    </div>

                    {/* Right side - Desktop Pages */}
                    <ul className='nav-list'>
                        {pages
                            .filter(
                                (p) =>
                                    p.isSpecialNav === undefined &&
                                    p.isFooter === undefined
                            )
                            .map((p) => (
                                <li key={p.href} className='nav-item'>
                                    <Link href={p.href} className='nav-link'>
                                        {p.label}
                                    </Link>
                                </li>
                            ))}

                        {pages
                            .filter((p) => p.isSpecialNav)
                            .map((p) => (
                                <li key={p.href} className='nav-item relative'>
                                    {p.label === 'Services' ? (
                                        <div
                                            onMouseEnter={() =>
                                                setShowServices(true)
                                            }
                                            onMouseLeave={() =>
                                                setShowServices(false)
                                            }
                                        >
                                            <Button
                                                href={p.href}
                                                label={p.label}
                                                variant='secondary'
                                            />

                                            <AnimatePresence>
                                                {showServices &&
                                                    services.length > 0 && (
                                                        <motion.div
                                                            className='services-dropdown'
                                                            {...serviceDropdownAnimations}
                                                        >
                                                            {/* Penetration Testing group */}
                                                            <div
                                                                className='service-group'
                                                                onMouseEnter={() =>
                                                                    setShowPenTesting(
                                                                        true
                                                                    )
                                                                }
                                                                onMouseLeave={() =>
                                                                    setShowPenTesting(
                                                                        false
                                                                    )
                                                                }
                                                            >
                                                                <div className='service-item flex items-center justify-between cursor-pointer'>
                                                                    Penetration
                                                                    Testing
                                                                    <Arrow
                                                                        open={
                                                                            showPenTesting
                                                                        }
                                                                    />
                                                                </div>

                                                                <AnimatePresence>
                                                                    {showPenTesting && (
                                                                        <motion.div
                                                                            className='submenu submenu-left'
                                                                            {...serviceDropdownAnimations}
                                                                        >
                                                                            {renderPenTestingLinks()}
                                                                        </motion.div>
                                                                    )}
                                                                </AnimatePresence>
                                                            </div>

                                                            {renderExtraServices()}
                                                        </motion.div>
                                                    )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Button
                                            href={p.href}
                                            label={p.label}
                                            variant={
                                                p.label === 'Contact Us'
                                                    ? 'gradient'
                                                    : 'secondary'
                                            }
                                        />
                                    )}
                                </li>
                            ))}
                    </ul>

                    {/* Mobile Toggle */}
                    <button
                        className='menu-toggle md:hidden'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='mobile-menu md:hidden'>
                    <ul className='mobile-list'>
                        {pages
                            .filter((p) => p.isFooter === undefined)
                            .map((p) => (
                                <li key={p.href} className='flex flex-col'>
                                    {p.label === 'Services' ? (
                                        <>
                                            <button
                                                className='mobile-link'
                                                onClick={() =>
                                                    setShowServices(
                                                        !showServices
                                                    )
                                                }
                                            >
                                                {p.label}
                                                <Arrow open={showServices} />
                                            </button>

                                            <AnimatePresence>
                                                {showServices &&
                                                    services.length > 0 && (
                                                        <motion.div
                                                            className='pl-4 flex flex-col gap-2 mt-2'
                                                            {...serviceDropdownAnimations}
                                                        >
                                                            {/* Penetration Testing group */}
                                                            <button
                                                                className='mobile-link'
                                                                onClick={() =>
                                                                    setShowPenTesting(
                                                                        !showPenTesting
                                                                    )
                                                                }
                                                            >
                                                                Penetration
                                                                Testing
                                                                <Arrow
                                                                    open={
                                                                        showPenTesting
                                                                    }
                                                                />
                                                            </button>

                                                            <AnimatePresence>
                                                                {showPenTesting && (
                                                                    <motion.div
                                                                        className='pl-4 flex flex-col gap-2 mt-2'
                                                                        {...serviceDropdownAnimations}
                                                                    >
                                                                        {renderPenTestingLinks(
                                                                            true
                                                                        )}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>

                                                            {renderExtraServices(
                                                                true
                                                            )}
                                                        </motion.div>
                                                    )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={p.href}
                                            className='mobile-link'
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {p.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}
