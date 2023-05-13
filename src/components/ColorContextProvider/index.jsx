import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { DARK, LIGHT } from 'constant'
import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { getDesignTokens } from 'themes'
import { ColorModeContext } from 'utils'

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
