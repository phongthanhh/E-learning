import React, { useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ColorModeContext } from 'utils'
import { useSelector } from 'react-redux'
import { getDesignTokens } from 'themes'
import { DARK, LIGHT } from 'constant'

function ColorContextProvider({ children }) {
  const { themeMode } = useSelector((state) => state.themeReducer)
  const [mode, setMode] = useState(themeMode)

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === LIGHT ? DARK : LIGHT))
      },
      mode
    }),
    [mode]
  )

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ColorContextProvider
