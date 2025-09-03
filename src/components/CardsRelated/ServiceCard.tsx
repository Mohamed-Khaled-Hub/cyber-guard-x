// Core
import Link from 'next/link'
import Image from 'next/image'
// Functions
import { toKebabCase } from '@/src/utils/Functions'
// Types
import { ServiceCardProps } from '@/src/types/propsTypes'
// Style
import '@/src/styles/components/CardsRelated/ServiceCard.css'

export default function ServiceCard({
    name,
    description,
    logo,
}: ServiceCardProps) {
    return (
        <div className='service-card'>
            {/* Logo */}
            <div className='service-card-logo'>
                <Image
                    src={logo}
                    alt={name + ' logo'}
                    width={64}
                    height={64}
                    className='object-contain'
                />
            </div>

            {/* Name */}
            <p className='service-card-name'>{name}</p>

            {/* Description */}
            <p className='service-card-description'>{description}</p>

            {/* Learn More Link */}
            <Link
                href={`/services/${toKebabCase(name)}`}
                className='service-card-link'
            >
                Learn More
            </Link>
        </div>
    )
}
