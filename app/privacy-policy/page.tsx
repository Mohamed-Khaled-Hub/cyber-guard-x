'use client'

// Core
import { motion } from 'framer-motion'
// Components
import AnimatedSection from '@/src/components/ContainersRelated/AnimatedSection'
// Style
import '@/src/styles/pages/privacy-policy/page.css'

export default function Page() {
    // Page Data
    const policyPageData = {
        title: 'Privacy Policy',
        lastUpdated: `Last updated: ${new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })}`,
        sections: [
            {
                heading: '1. Introduction',
                content:
                    'We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.',
            },
            {
                heading: '2. Information We Collect',
                content:
                    'We may collect personal information such as your name, email address, phone number, and payment details when you interact with our website or services. Non-personal data such as browser type, device information, and usage patterns may also be collected for analytics purposes.',
            },
            {
                heading: '3. How We Use Your Information',
                content:
                    'The information we collect is used to provide, improve, and personalize our services. We may also use it for communication, security, fraud prevention, and compliance with legal obligations.',
            },
            {
                heading: '4. Data Sharing & Disclosure',
                content:
                    'We do not sell or rent your personal information. We may share your data with trusted third parties that help us operate our services, or when required by law.',
            },
            {
                heading: '5. Data Security',
                content:
                    'We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, or disclosure.',
            },
            {
                heading: '6. Your Rights',
                content:
                    'You have the right to access, correct, or request the deletion of your personal data. Please contact us if you wish to exercise these rights.',
            },
            {
                heading: '7. Changes to This Policy',
                content:
                    'We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last updated" date will be revised accordingly.',
            },
            {
                heading: '8. Contact Us',
                content:
                    'If you have any questions about this Privacy Policy, please contact us at privacy@cyberguardx.com.',
            },
        ],
    }

    // Animation Variants (same concept everywhere)
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
        <div className='policy-page'>
            {/* Heading */}
            <AnimatedSection className='policy-heading'>
                <motion.h1
                    className='policy-title'
                    variants={fadeInUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                >
                    {policyPageData.title}
                </motion.h1>
                <motion.p
                    className='policy-updated'
                    variants={fadeInUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    custom={1}
                >
                    {policyPageData.lastUpdated}
                </motion.p>
            </AnimatedSection>

            {/* Sections */}
            <div className='policy-sections'>
                {policyPageData.sections.map((section, idx) => (
                    <AnimatedSection key={`section-${idx}`}>
                        <motion.article
                            className='policy-section'
                            variants={fadeInUp}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                            custom={idx}
                        >
                            <h2 className='policy-section-title'>
                                {section.heading}
                            </h2>
                            <p className='policy-section-text'>
                                {section.content}
                            </p>
                        </motion.article>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    )
}
