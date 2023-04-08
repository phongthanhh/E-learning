/* eslint-disable no-magic-numbers */
import {
  amber, deepOrange, grey
} from '@mui/material/colors'
import { LIGHT } from 'constant'
import { COLORS } from './color'

const palette = {
  light: {
    primary: {
      main: COLORS.global,
      light: COLORS.globalLight,
      dark: COLORS.globalDark
    }
  },
  dark: {
    primary: {
      main: COLORS.global
    }
  }
}

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === LIGHT ? {
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
        main: palette.dark.primary.main
      },
      divider: deepOrange[700],
      background: {
        default: COLORS.darkModeBg,
        paper: COLORS.darkModePaper
      },
      text: {
        primary: COLORS.white,
        secondary: grey[500]
      }
    }
    )
  }
})
