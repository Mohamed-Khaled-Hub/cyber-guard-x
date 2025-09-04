// Core
import Image from 'next/image'
// Types
import { ReviewCardProps } from '@/src/types/propsTypes'
// Style
import '@/src/styles/components/CardsRelated/ReviewCard.css'

export default function ReviewCard({ imgSrc, name, review }: ReviewCardProps) {
    return (
        <div className='review-card'>
            <div className='review-card-img-wrapper'>
                <Image
                    src={imgSrc}
                    alt={name + ' profile'}
                    width={96}
                    height={96}
                    className='review-card-img'
                />
            </div>
            <p className='review-card-name'>{name}</p>
            <p className='review-card-text'>{review}</p>
        </div>
    )
}
