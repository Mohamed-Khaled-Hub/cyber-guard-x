'use client'

// Core
import Link from 'next/link'
// Components
import Button from '@/src/components/UIRelated/Button'
import Container from '@/src/components/ContainersRelated/Container'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Style
import '@/src/styles/components/NavRelated/Nav.css'

export default function Nav() {
    const { pages } = useWebsiteInfo()

    return (
        <nav className='nav'>
            <Container addMargin>
                <div className='nav-inner'>
                    {/* Left side - Pages */}
                    <ul className='nav-list'>
                        {pages
                            .filter((p) => !p.isService && !p.isFooter)
                            .map((p) => (
                                <li key={p.href} className='nav-item'>
                                    <Link href={p.href} className='nav-link'>
                                        {p.label}
                                    </Link>
                                </li>
                            ))}
                    </ul>

                    {/* Right side - Auth */}
                    <div className='nav-actions'>
                        <Button
                            href='/login'
                            variant='secondary'
                            label='Login'
                        />
                        <Button href='/signup' label='Sign Up' />
                    </div>
                </div>
            </Container>
        </nav>
    )
}
