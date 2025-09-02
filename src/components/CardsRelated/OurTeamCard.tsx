// Core
import Image from 'next/image'
// Types
import { OurTeamCardProps } from '@/src/types/propsTypes'
// Style
import '@/src/styles/components/CardsRelated/OurTeamCard.css'

export default function OurTeamCard({ imgSrc, name, role }: OurTeamCardProps) {
    return (
        <div className='our-team-card'>
            <Image
                width={100}
                height={100}
                src={imgSrc}
                alt={name + ' image'}
            />
            <p className='team-member-name'>{name}</p>
            <p className='team-member-role'>{role}</p>
        </div>
    )
}
