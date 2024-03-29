import { LIGHT } from 'constant'
import { createContext } from 'react'

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: LIGHT
})
