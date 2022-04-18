import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

interface AppContextInterface {
  toggleSearch: [boolean, Dispatch<SetStateAction<boolean>>]
}
const AppContext = createContext<AppContextInterface | null>(null)

export default AppContext
