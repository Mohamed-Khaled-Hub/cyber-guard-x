'use client'

// Core
import Link from 'next/link'
import Image from 'next/image'
// Components
import Button from '@/src/components/UIRelated/Button'
import Container from '@/src/components/ContainersRelated/Container'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Style
import '@/src/styles/components/NavRelated/Nav.css'

export default function Nav() {
    const { name, pages, logoUrl } = useWebsiteInfo()

    return (
        <nav className='nav'>
            <Container addMargin>
                <div className='nav-inner'>
                    {/* Left side - Icon */}
                    <div className='nav-actions'>
                        <Link href='/'>
                            <Image
                                src={logoUrl}
                                alt={`${name} logo`}
                                width={50}
                                height={50}
                            />
                        </Link>
                    </div>

                    {/* Right side - Pages */}
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
                </div>
            </Container>
        </nav>
    )
}
