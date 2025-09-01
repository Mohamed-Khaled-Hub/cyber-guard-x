// Components
import Nav from '@/src/components/NavRelated/Nav'
import Main from '@/src/components/ContainersRelated/Main'
import Footer from '@/src/components/FooterRelated/Footer'
// Fonts
import { mainFont } from '@/src/fonts/Fonts'
// Providers
import AllProviders from '@/src/providers/AllProviders'
// Types
import { RootLayoutProps } from '@/src/types/propsTypes'
// Style
import '@/src/styles/layouts/layout.css'

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='en'>
            <body className={`${mainFont.className} antialiased`}>
                <AllProviders>
                    <Nav />
                    <Main navFixed>{children}</Main>
                    <Footer />
                </AllProviders>
            </body>
        </html>
    )
}
