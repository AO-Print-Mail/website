import { createContext } from 'react'

export const LayoutScrollContext = createContext({
  scrollLock: false,
  toggleScrollLock: undefined,
})
