'use client'

// Core
import { useState, FormEvent } from 'react'
// Components
import Input from '@/src/components/UIRelated/Input'
import Button from '@/src/components/UIRelated/Button'
// Style
import '@/src/styles/components/UIRelated/ContactForm.css'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleChange = (field: keyof typeof formData) => (value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // 👉 Add API call here
    }

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
            <div className='contact-form-row'>
                <Input
                    placeholder='First Name'
                    required
                    onChangeAction={handleChange('firstName')}
                    value={formData.firstName}
                />
                <Input
                    placeholder='Last Name'
                    required
                    onChangeAction={handleChange('lastName')}
                    value={formData.lastName}
                />
            </div>

            <Input
                placeholder='Email'
                type='email'
                required
                onChangeAction={handleChange('email')}
                value={formData.email}
            />

            <Input
                placeholder='Phone Number'
                type='tel'
                onChangeAction={handleChange('phone')}
                value={formData.phone}
            />

            <Input
                as='textarea'
                placeholder='Your message...'
                required
                onChangeAction={handleChange('message')}
                value={formData.message}
                className='contact-textarea'
            />

            <Button
                type='submit'
                variant='service'
                label='Send Email'
                className='w-full'
            />
        </form>
    )
}
