/* eslint-disable no-magic-numbers */
import React, { useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ColorModeContext } from 'utils'
import { useSelector } from 'react-redux'
import {
  amber, deepOrange, grey
} from '@mui/material/colors'
import { COLORS } from 'themes'

function ColorContextProvider({ children }) {
  const { themeMode } = useSelector((state) => state.themeReducer)
  const [mode, setMode] = useState(themeMode)

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
      mode
    }),
    [mode]
  )

  const palette = {
    light: {
      primary: {
        main: '#34C0AC',
        light: '#B1DED3',
        dark: '#00765A'
      }
    },
    dark: {
      primary: {
        main: '#34C0AC',
        light: '#B1DED3',
        dark: '#00765A'
      }
    }
  }

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode,
        ...(mode === 'light' ? {
          primary: {
            main: palette.light.primary.main,
            light: palette.light.primary.light,
            dark: palette.light.primary.dark
          },

          divider: amber[200],
          text: {
            primary: COLORS.text,
            secondary: grey[800]
          }
        } : {
          // palette values for dark mode
          primary: {
            main: 'rgba(255, 255, 255, 0.16)'
          },
          divider: deepOrange[700],
          background: {
            default: COLORS.darkModeBg,
            paper: '#111827'
          },
          text: {
            primary: '#fff',
            secondary: grey[500]
          }
        }
        )
      }
    }),
    [mode]
  )

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
