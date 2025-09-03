// Core
import axios from 'axios'
import { useContext } from 'react'
// Contexts
import { ContactContext } from '@/src/contexts/Contexts'
// Types
import { ContactProviderProps } from '@/src/types/propsTypes'
import { SMTPGoogleResponse } from '@/src/types/objectsTypes'

// Server
const server = process.env.NEXT_PUBLIC_SERVER_ENDPOINT

// Hook
export const useContact = () => useContext(ContactContext)

// Provider
export function ContactProvider({ children }: ContactProviderProps) {
    const sendContactMessage = async (formData: {
        firstName: string
        lastName: string
        email: string
        phone?: string
        message: string
    }): Promise<SMTPGoogleResponse> => {
        try {
            const res = await axios.post(`${server}/api/contact`, formData, {
                headers: { 'Content-Type': 'application/json' },
            })
            return res.data
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error('Error sending contact message:', error)
            return {
                success: false,
                message:
                    'Network error. Please check your connection and try again.',
            }
        }
    }

    return (
        <ContactContext.Provider
            value={{
                sendContactMessage,
            }}
        >
            {children}
        </ContactContext.Provider>
    )
}
