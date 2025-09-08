'use client'

// Core
import { LuMapPin } from 'react-icons/lu'
import { motion, easeOut } from 'framer-motion'
import { MdOutlineMail, MdOutlinePhone } from 'react-icons/md'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Components
import Button from '@/src/components/UIRelated/Button'
import ContactForm from '@/src/components/UIRelated/ContactForm'
// Style
import '@/src/styles/pages/contact-us/page.css'

export default function ContactUsPage() {
    const { contact } = useWebsiteInfo()

    // Page Data
    const contactPageData = {
        title: 'Reach Us!',
        subtitle: 'One of our experts will be in contact with you shortly',
        button: {
            label: 'Schedule a Call',
            href:
                process.env.NEXT_PUBLIC_CALENDLY_LINK ||
                'https://www.google.com',
        },
    }

    // Animations
    const animations = {
        fadeInUpBase: {
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, amount: 0.3 },
            variants: {
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
            },
        },
        contactInfo: {
            transition: { duration: 0.6 },
        },
        contactItem: (i: number) => ({
            transition: { duration: 0.5, delay: i * 0.1 },
        }),
        contactButton: {
            initial: 'hidden',
            animate: 'visible',
            variants: {
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            },
            transition: { duration: 0.6, delay: 0.4, ease: easeOut },
        },
        contactForm: {
            transition: { duration: 0.6, delay: 0.2 },
        },
    }

    return (
        <div className='contact-page'>
            <div className='contact-grid'>
                {/* Left Column – Contact Info */}
                <motion.div
                    className='contact-info'
                    {...animations.fadeInUpBase}
                    transition={animations.contactInfo.transition}
                >
                    <div className='contact-heading'>
                        <h2 className='contact-info-title'>
                            {contactPageData.title}
                        </h2>
                        <p className='contact-info-subtitle'>
                            {contactPageData.subtitle}
                        </p>
                    </div>
                    <ul>
                        {contact.emails.map((email, i) => (
                            <motion.li
                                key={`email-${i}`}
                                {...animations.fadeInUpBase}
                                transition={
                                    animations.contactItem(i).transition
                                }
                            >
                                <MdOutlineMail className='icon' />
                                <a href={`mailto:${email}`}>{email}</a>
                            </motion.li>
                        ))}

                        {contact.phones.map((phone, i) => (
                            <motion.li
                                key={`phone-${i}`}
                                {...animations.fadeInUpBase}
                                transition={
                                    animations.contactItem(i).transition
                                }
                            >
                                <MdOutlinePhone className='icon' />
                                <a href={`tel:${phone}`}>{phone}</a>
                            </motion.li>
                        ))}

                        {contact.addresses.map((addr, i) => (
                            <motion.li
                                key={`addr-${i}`}
                                {...animations.fadeInUpBase}
                                transition={
                                    animations.contactItem(i).transition
                                }
                            >
                                <LuMapPin className='icon' />
                                <span>{addr}</span>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.div
                        {...animations.contactButton}
                        className='contact-info-button-wrapper'
                    >
                        <Button
                            type='submit'
                            href={contactPageData.button.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            variant='service'
                            label={contactPageData.button.label}
                            className='contact-info-button'
                        />
                    </motion.div>
                </motion.div>

                {/* Right Column – Contact Form */}
                <motion.div
                    className='contact-form-wrapper'
                    {...animations.fadeInUpBase}
                    transition={animations.contactForm.transition}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </div>
    )
}
