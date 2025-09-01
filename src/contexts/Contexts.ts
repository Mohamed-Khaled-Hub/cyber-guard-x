// Core
import { createContext } from 'react'
// Types
import { WebsiteInfoContextType } from '@/src/types/contextsTypes'

// Website's Info (name, desc, phones, ...etc)
export const WebsiteInfoContext = createContext<WebsiteInfoContextType>(
    {} as WebsiteInfoContextType
)
