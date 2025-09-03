export type ReviewObject = {
    imgSrc: string
    name: string
    review: string
}

export type TeamMemberObject = {
    imgSrc: string
    name: string
    role: string
}

export type ServiceObject = {
    imgSrc: string
    logo: string
    name: string
    type: 'software' | 'cyber'
    description: string
    extraInfo?: {
        imgSrc: string
        description: string
    }[]
    whatWeCanOffer?: {
        imgSrc: string
        name: string
        description: string
    }[]
}
