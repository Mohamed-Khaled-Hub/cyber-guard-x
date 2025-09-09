// Core
import Image from 'next/image'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Style
import '@/src/styles/components/SectionsRelated/HeroSection.css'

export default function HeroSection() {
    const { name, fullLogoUrl } = useWebsiteInfo()

    return (
        <section className='hero-section'>
            <div className='hero-background'>
                {/* Video Case */}
                <video
                    src='/assets/videos/background.mp4'
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className='overlay'></div>
            </div>
            <Image
                width={550}
                height={550}
                src={fullLogoUrl}
                alt={name + ' logo'}
                className='hero-logo'
            />
        </section>
    )
}
