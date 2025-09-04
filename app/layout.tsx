// Components
import Nav from '@/src/components/NavRelated/Nav'
import Main from '@/src/components/ContainersRelated/Main'
import Footer from '@/src/components/FooterRelated/Footer'
import ScrollToTop from '@/src/components/ScrollingRelated/ScrollToTop'
// Fonts
import { mainFont } from '@/src/fonts/Fonts'
// Providers
import AllProviders from '@/src/providers/AllProviders'
// Types
import { LayoutProps } from '@/src/types/propsTypes'
// Style
import '@/src/styles/layouts/layout.css'

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang='en'>
            <body className={`${mainFont.className} antialiased`}>
                <ScrollToTop />
                <AllProviders>
                    <Nav />
                    <Main navFixed>{children}</Main>
                    <Footer />
                </AllProviders>
            </body>
        </html>
    )
}
