'use client'

// Core
import { motion } from 'framer-motion'
// Components
import AnimatedSection from '@/src/components/ContainersRelated/AnimatedSection'
// Style
import '@/src/styles/pages/terms-and-conditions/page.css'

export default function TermsAndConditionsPage() {
    // Page Data
    const termsPageData = {
        title: 'Terms & Conditions',
        lastUpdated: `Last updated: ${new Date('9-5-2025').toLocaleDateString(
            'en-US',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
        )}`,
        sections: [
            {
                heading: '1. Acceptance of Terms',
                content:
                    'By accessing and using our services, you agree to comply with and be bound by these terms. If you do not agree, please discontinue use immediately.',
            },
            {
                heading: '2. Use of Services',
                content:
                    'You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment of the services.',
            },
            {
                heading: '3. Intellectual Property',
                content:
                    'All content, trademarks, and data on this website are the property of CyberGuardX and are protected by applicable intellectual property laws.',
            },
            {
                heading: '4. Limitation of Liability',
                content:
                    'We are not responsible for any damages, losses, or expenses resulting from the use or inability to use our services, except where required by law.',
            },
            {
                heading: '5. Changes to Terms',
                content:
                    'We reserve the right to update or modify these Terms and Conditions at any time. Continued use of the services after changes constitutes acceptance of the revised terms.',
            },
            {
                heading: '6. Contact Us',
                content:
                    'If you have any questions about these Terms and Conditions, please contact us at support@cyberguardx.com.',
            },
        ],
    }

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.05,
            },
        }),
    }

    return (
        <div className='terms-page'>
            {/* Animate Title + Last Updated */}
            <AnimatedSection className='terms-heading'>
                <motion.h1
                    className='terms-title'
                    variants={fadeInUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                >
                    {termsPageData.title}
                </motion.h1>
                <motion.p
                    className='terms-updated'
                    variants={fadeInUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    custom={1}
                >
                    {termsPageData.lastUpdated}
                </motion.p>
            </AnimatedSection>

            {/* Animate Sections */}
            <div className='terms-sections'>
                {termsPageData.sections.map((section, idx) => (
                    <AnimatedSection key={`section-${idx}`}>
                        <motion.section
                            className='terms-section'
                            variants={fadeInUp}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            custom={idx}
                        >
                            <h2 className='terms-section-title'>
                                {section.heading}
                            </h2>
                            <p className='terms-section-text'>
                                {section.content}
                            </p>
                        </motion.section>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    )
}
