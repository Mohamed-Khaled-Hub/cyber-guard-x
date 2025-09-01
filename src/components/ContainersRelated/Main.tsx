'use client'

// Components
import Container from '@/src/components/ContainersRelated/Container'
import HeroSection from '@/src/components/SectionsRelated/HeroSection'
// Functions
import { renderClasses } from '@/src/utils/Functions'
// Types
import { MainProps } from '@/src/types/propsTypes'
// Style
import '@/src/styles/components/ContainersRelated/Main.css'

export default function Main({ children, navFixed }: MainProps) {
    return (
        <main
            className={renderClasses('main', navFixed && 'mt-(--nav-height)')}
        >
            <HeroSection />
            <Container addMargin>{children}</Container>
        </main>
    )
}
