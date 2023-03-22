/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { StyledSwitchButton } from './styled'

function SwitchThemeButton() {
  return (
    <StyledSwitchButton>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="label">
        <DarkModeOutlinedIcon className="moon" />
        <LightModeOutlinedIcon className="sun" />
        <div className="ball" />
      </label>
    </StyledSwitchButton>
  )
}

export default SwitchThemeButton
