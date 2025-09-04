'use client'

// Core
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
// Components
import Button from '@/src/components/UIRelated/Button'
import Container from '@/src/components/ContainersRelated/Container'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Style
import '@/src/styles/components/NavRelated/Nav.css'

export default function Nav() {
    // Contexts
    const { name, pages, logoUrl } = useWebsiteInfo()
    // States
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 120)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Animations
    const logoAnimations = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
        transition: { duration: 0.3 },
    }

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
                                            height={50}
                                            priority
                                        />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key='small-logo'
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src={logoUrl}
                                            alt={`${name} logo`}
                                            width={50}
                                            height={50}
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
                                <li key={p.href} className='nav-item'>
                                    <Button
                                        href={p.href}
                                        label={p.label}
                                        variant={
                                            p.label === 'Contact Us'
                                                ? 'gradient'
                                                : 'secondary'
                                        }
                                    />
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
                                <li key={p.href}>
                                    <Link
                                        href={p.href}
                                        className='mobile-link'
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {p.label}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}
