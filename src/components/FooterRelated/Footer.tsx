'use client'

// Core
import Link from 'next/link'
import Image from 'next/image'
import { LuMapPin } from 'react-icons/lu'
import { useCallback, useEffect, useState } from 'react'
import { MdOutlineMail, MdOutlinePhone } from 'react-icons/md'
// Components
import Button from '@/src/components/UIRelated/Button'
import Container from '@/src/components/ContainersRelated/Container'
// Functions
import { toKebabCase } from '@/src/utils/Functions'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
import { useCompanyData } from '@/src/providers/CompanyDataProvider'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'
// Style
import '@/src/styles/components/FooterRelated/Footer.css'

/* eslint-disable react-hooks/exhaustive-deps */
export default function Footer() {
    // Contexts
    const { getServices } = useCompanyData()
    const { name, logoUrl, contact, socials, pages } = useWebsiteInfo()
    // States
    const [services, setServices] = useState<ServiceObject[]>([])

    const fetchData = useCallback(async () => {
        const res = await getServices()
        setServices(res)
    }, [getServices])

    useEffect(() => {
        fetchData().then()
    }, [])

    return (
        <>
            <div
                className='footer-actions-shifted'
                style={{
                    backgroundImage: `url(/assets/images/background-pattern.png)`,
                }}
            >
                <h2 className='footer-actions-title'>Ready To Get Started ?</h2>
                <p className='footer-actions-subtitle'>
                    Contact one of our experts to discuss your organization’s
                    need
                </p>
                <h3 className='footer-actions-heading'>CONTACT US!</h3>
                <div className='footer-actions-buttons'>
                    <Button
                        variant='secondary'
                        href='/contact-us'
                        label='Contact Us'
                        className='min-w-40'
                    />
                    <Button
                        variant='primary'
                        href='https://calendly.com/youssefarag3/30min'
                        target='_blank'
                        label='Schedule a call'
                        className='min-w-40'
                    />
                </div>
            </div>
            <footer className='footer'>
                <Container addMargin>
                    <div className='footer-grid'>
                        {/* Middle Column - Socials (comes first on mobile) */}
                        {(socials.facebook ||
                            socials.instagram ||
                            socials.linkedIn) && (
                            <div className='footer-socials order-1 md:order-2'>
                                <Image
                                    src={logoUrl}
                                    alt={`${name} logo`}
                                    width={80}
                                    height={80}
                                />
                                <ul>
                                    {socials.linkedIn && (
                                        <li>
                                            <Link
                                                href={socials.linkedIn}
                                                target='_blank'
                                            >
                                                <Image
                                                    width={20}
                                                    height={20}
                                                    src={
                                                        '/assets/social/linkedin.svg'
                                                    }
                                                    alt={'LinkedIn'}
                                                />
                                            </Link>
                                        </li>
                                    )}
                                    {socials.instagram && (
                                        <li>
                                            <Link
                                                href={socials.instagram}
                                                target='_blank'
                                            >
                                                <Image
                                                    width={20}
                                                    height={20}
                                                    src={
                                                        '/assets/social/instagram.svg'
                                                    }
                                                    alt={'Instagram'}
                                                />
                                            </Link>
                                        </li>
                                    )}
                                    {socials.facebook && (
                                        <li>
                                            <Link
                                                href={socials.facebook}
                                                target='_blank'
                                            >
                                                <Image
                                                    width={20}
                                                    height={20}
                                                    src={
                                                        '/assets/social/facebook.svg'
                                                    }
                                                    alt={'Facebook'}
                                                />
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}

                        {/* Left Column - Pages */}
                        {services && services.length > 0 && (
                            <div className='footer-pages order-2 md:order-1'>
                                <h3>Services</h3>
                                <ul>
                                    {services
                                        .sort(
                                            (a, b) =>
                                                b.name.length - a.name.length
                                        ) // longest first
                                        .slice(0, 5) // only 5
                                        .sort(
                                            (a, b) =>
                                                a.name.length - b.name.length
                                        ) // reorder shortest-first among top 5
                                        .map((service, idx) => (
                                            <li key={`service-${idx}`}>
                                                <Link
                                                    href={`/services/${toKebabCase(
                                                        service.name
                                                    )}`}
                                                >
                                                    {service.name}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                                <div className='mt-2'>
                                    <Link
                                        href={
                                            pages.find(
                                                (p) =>
                                                    p.label.toLowerCase() ===
                                                    'services'
                                            )!.href
                                        }
                                        className='text-sm underline underline-offset-2'
                                    >
                                        Explore our services
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* Right Column - Contact */}
                        {(contact.emails.length > 0 ||
                            contact.phones.length > 0 ||
                            contact.addresses.length > 0) && (
                            <div className='footer-contact order-3 md:order-3'>
                                <h3>Reach Us</h3>
                                <ul>
                                    {contact.emails.map((email, i) => (
                                        <li key={i}>
                                            <div>
                                                <MdOutlineMail />
                                            </div>
                                            <Link href={`mailto:${email}`}>
                                                {email}
                                            </Link>
                                        </li>
                                    ))}
                                    {contact.phones.map((phone, i) => (
                                        <li key={i}>
                                            <div>
                                                <MdOutlinePhone />
                                            </div>
                                            <Link href={`tel:${phone}`}>
                                                {phone}
                                            </Link>
                                        </li>
                                    ))}
                                    {contact.addresses.map((addr, i) => (
                                        <li key={i}>
                                            <div>
                                                <LuMapPin />
                                            </div>
                                            {addr}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </Container>

                {/* Bottom Note */}
                <div className='footer-bottom'>
                    <p>
                        Copyright © {new Date().getFullYear()} {name}, LLC. All
                        rights reserved.
                    </p>
                    {pages &&
                        pages.some((p) => p.isFooter) &&
                        pages
                            .filter((p) => p.isFooter)
                            .map((p, i, arr) => (
                                <span key={i}>
                                    <Link href={p.href}>{p.label}</Link>
                                    {i < arr.length - 1 && (
                                        <span className='ml-2 text-white'>
                                            |
                                        </span>
                                    )}
                                </span>
                            ))}
                </div>
            </footer>
        </>
    )
}
