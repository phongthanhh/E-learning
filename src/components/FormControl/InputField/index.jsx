import { TextField } from '@mui/material'
import React from 'react'

function InputField({
  form, name, label, defaultValue = '', disabled = false
}) {
  const { register, formState: { errors } } = form
  return (
    <TextField
      disabled={disabled}
      defaultValue={defaultValue}
      name={name}
      label={label}
      variant="outlined"
      fullWidth
      error={errors[name] && true}
      {...register(name)}
      helperText={errors[name]?.message}
    />
  )
}

export default InputField
