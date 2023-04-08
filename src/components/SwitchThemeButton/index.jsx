import React, { useContext, useEffect } from 'react'
import { FormControlLabel } from '@mui/material'
import { ColorModeContext, setItem } from 'utils'
import { useDispatch } from 'react-redux'
import { SWITCH_THEME } from 'stores'
import { THEME } from 'constant'
import { MaterialUISwitch } from './styled'

function SwitchThemeButton() {
  const dispatch = useDispatch()
  const { mode, toggleColorMode } = useContext(ColorModeContext)

  useEffect(() => {
    setItem(THEME, mode)
    dispatch({
      type: SWITCH_THEME,
      payload: mode
    })
  }, [mode, dispatch])

  return (
    <FormControlLabel
      className="m-0"
      control={<MaterialUISwitch onChange={toggleColorMode} sx={{ m: 0 }} defaultChecked />}
    />
  )
}

export default SwitchThemeButton
