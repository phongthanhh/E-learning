/* eslint-disable no-unused-vars */
import { TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

function InputField(props) {
  const { form, name, label } = props
  const { register, formState: { errors } } = form
  return (
  // <Controller
  //   name={name}
  //   label={label}
  //   render={({ field }) => <TextField {...field} />}
  //   control={form.control}
  // />
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
