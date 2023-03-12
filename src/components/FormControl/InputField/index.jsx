/* eslint-disable no-unused-vars */
import { TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

function InputField(props) {
  const { form, name, label } = props
  return (
    <TextField id="outlined-basic" name={name} label={label} variant="outlined" fullWidth required />
  )
}

export default InputField
