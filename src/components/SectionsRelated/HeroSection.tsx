// Core
import Image from 'next/image'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Style
import '@/src/styles/components/SectionsRelated/HeroSection.css'

export default function HeroSection() {
    const { name, fullLogoUrl } = useWebsiteInfo()

    return (
        <section
            className='hero-section'
            style={{
                backgroundImage: `url(/assets/images/background-pattern.png)`,
            }}
        >
            <Image
                width={400}
                height={400}
                src={fullLogoUrl}
                alt={name + ' logo'}
            />
        </section>
    )
}
