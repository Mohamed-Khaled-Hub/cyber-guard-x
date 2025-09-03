// Core
import Image from 'next/image'
// Types
import { MiniServiceCardProps } from '@/src/types/propsTypes'
// Style
import '@/src/styles/components/CardsRelated/MiniServiceCard.css'

export default function MiniServiceCard({
    logo,
    name,
    description,
}: MiniServiceCardProps) {
    return (
        <div className='mini-card'>
            <div className='mini-card-logo'>
                <Image
                    src={logo}
                    alt={name + ' icon'}
                    width={64}
                    height={64}
                    className='mini-card-logo-img'
                />
            </div>

            <p className='mini-card-title'>{name}</p>
            <p className='mini-card-description'>{description}</p>
        </div>
    )
}
