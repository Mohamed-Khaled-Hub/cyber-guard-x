// Core
import { createContext } from 'react'
// Types
import {
    CompanyDataContextType,
    ContactContextType,
    WebsiteInfoContextType,
} from '@/src/types/contextsTypes'

// Website's Info (name, desc, phones, ...etc)
export const WebsiteInfoContext = createContext<WebsiteInfoContextType>(
    {} as WebsiteInfoContextType
)

export const CompanyDataContext = createContext<CompanyDataContextType>(
    {} as CompanyDataContextType
)

export const ContactContext = createContext<ContactContextType>(
    {} as ContactContextType
)
