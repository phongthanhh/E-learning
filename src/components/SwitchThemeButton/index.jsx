import React from 'react'
import { FormControlLabel } from '@mui/material'
import { MaterialUISwitch } from './styled'

function SwitchThemeButton() {
  const handleChangeChecked = (event) => {
    const { checked } = event.target
    console.log(checked)
  }
  return (
    <FormControlLabel
      className="m-0"
      control={<MaterialUISwitch onChange={handleChangeChecked} sx={{ m: 0 }} defaultChecked />}
    />
  )
}

export default SwitchThemeButton
