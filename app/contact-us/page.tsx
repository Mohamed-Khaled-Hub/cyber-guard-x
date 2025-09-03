'use client'

// Core
import { LuMapPin } from 'react-icons/lu'
import { MdOutlineMail, MdOutlinePhone } from 'react-icons/md'
// Hooks
import { useWebsiteInfo } from '@/src/providers/WebsiteInfoProvider'
// Components
import Button from '@/src/components/UIRelated/Button'
import ContactForm from '@/src/components/UIRelated/ContactForm'
// Style
import '@/src/styles/pages/ContactPage.css'

export default function Page() {
    const { contact } = useWebsiteInfo()

    return (
        <div className='contact-page'>
            {/* Page Title */}
            <div className='contact-grid'>
                {/* Left Column – Contact Info */}
                <div className='contact-info'>
                    <h2 className='contact-info-title text-center'>
                        Reach Us!
                    </h2>
                    <p className='text-gray-500 mb-6 leading-relaxed text-center'>
                        One of our experts <br />
                        will be in contact with you shortly
                    </p>
                    <ul>
                        {contact.emails.map((email, i) => (
                            <li key={`email-${i}`}>
                                <MdOutlineMail className='icon' />
                                <a href={`mailto:${email}`}>{email}</a>
                            </li>
                        ))}

                        {contact.phones.map((phone, i) => (
                            <li key={`phone-${i}`}>
                                <MdOutlinePhone className='icon' />
                                <a href={`tel:${phone}`}>{phone}</a>
                            </li>
                        ))}

                        {contact.addresses.map((addr, i) => (
                            <li key={`addr-${i}`}>
                                <LuMapPin className='icon' />
                                <span>{addr}</span>
                            </li>
                        ))}
                    </ul>
                    <Button
                        type='submit'
                        href='https://calendly.com/youssefarag3/30min'
                        target='_blank'
                        rel='noopener noreferrer'
                        variant='service'
                        label='Schedule a Call'
                        className='w-full mt-12'
                    />
                </div>

                {/* Right Column – Contact Form */}
                <div className='contact-form-wrapper'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
