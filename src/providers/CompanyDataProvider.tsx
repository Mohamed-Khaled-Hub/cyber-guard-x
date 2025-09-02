// Core
import axios from 'axios'
import { useContext } from 'react'
// Contexts
import { CompanyDataContext } from '@/src/contexts/Contexts'
// Types
import { CompanyDataProviderProps } from '@/src/types/propsTypes'

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
            return [] // return empty array as fallback
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

    return (
        <CompanyDataContext.Provider
            value={{
                getTeam,
                getReviews,
                getServices,
            }}
        >
            {children}
        </CompanyDataContext.Provider>
    )
}
