// Core
import axios from 'axios'
import { useContext } from 'react'
// Contexts
import { CompanyDataContext } from '@/src/contexts/Contexts'
// Types
import { CompanyDataProviderProps } from '@/src/types/propsTypes'
import { ServiceObject } from '@/src/types/objectsTypes'

// Server
const server = 'http://localhost:3000'

// Hook
export const useCompanyData = () => useContext(CompanyDataContext)

// Provider
export function CompanyDataProvider({ children }: CompanyDataProviderProps) {
    const getTeam = async () => {
        try {
            const res = await axios.get(`${server}/api/team`)
            return res.data
        } catch (error) {
            console.error('Error fetching team:', error)
            return [] // fallback
        }
    }

    const getReviews = async () => {
        try {
            const res = await axios.get(`${server}/api/reviews`)
            return res.data
        } catch (error) {
            console.error('Error fetching reviews:', error)
            return []
        }
    }

    const getServices = async () => {
        try {
            const res = await axios.get(`${server}/api/services`)
            return res.data
        } catch (error) {
            console.error('Error fetching services:', error)
            return []
        }
    }

    const getServiceByName = async (
        name: string
    ): Promise<ServiceObject | null> => {
        try {
            const res = await axios.get(`${server}/api/services/${name}`)
            return res.data
        } catch (error) {
            console.error(`Error fetching service ${name}:`, error)
            return null
        }
    }

    return (
        <CompanyDataContext.Provider
            value={{
                getTeam,
                getReviews,
                getServices,
                getServiceByName,
            }}
        >
            {children}
        </CompanyDataContext.Provider>
    )
}
