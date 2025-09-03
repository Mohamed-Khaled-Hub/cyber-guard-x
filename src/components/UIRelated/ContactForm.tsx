'use client'

// Core
import { useState, FormEvent } from 'react'
// Components
import Input from '@/src/components/UIRelated/Input'
import Button from '@/src/components/UIRelated/Button'
// Style
import '@/src/styles/components/UIRelated/ContactForm.css'

interface ApiResponse {
    success: boolean
    message: string
}

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null
        message: string
    }>({ type: null, message: '' })

    const handleChange = (field: keyof typeof formData) => (value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        // Clear status when user starts typing
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: '' })
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data: ApiResponse = await response.json()

            if (data.success) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
                })
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                })
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.message || 'Something went wrong. Please try again.',
                })
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitStatus({
                type: 'error',
                message: 'Network error. Please check your connection and try again.',
            })
        } finally {
            setIsSubmitting(false)
        }
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

            {/* Status Message */}
            {submitStatus.type && (
                <div
                    className={`status-message ${
                        submitStatus.type === 'success' ? 'status-success' : 'status-error'
                    }`}
                >
                    {submitStatus.message}
                </div>
            )}

            <Button
                type='submit'
                variant='service'
                label={isSubmitting ? 'Sending...' : 'Send Email'}
                className='w-full'
                disabled={isSubmitting}
            />
        </form>
    )
}
