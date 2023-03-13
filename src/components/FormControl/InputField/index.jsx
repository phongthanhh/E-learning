import { TextField } from '@mui/material'
import React from 'react'

function InputField(props) {
  const { form, name, label } = props
  const { register, formState: { errors } } = form
  return (
    <TextField
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
