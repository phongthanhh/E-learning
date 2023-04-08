import {
  Button, Grid, Typography
} from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputField, PasswordField } from 'components'
import { loginAction } from 'stores'
import { useDispatch } from 'react-redux'
import { schema } from './schema'

function SignInForm() {
  const dispatch = useDispatch()

  const form = useForm({
    defaultValues: {
      taiKhoan: '',
      matKhau: ''
    },
    resolver: yupResolver(schema),
    mode: 'onTouched'
  })

  const handleSubmit = (data) => {
    dispatch(loginAction(data))
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Typography variant="h5" component="h5" className="pt-3 mb-3">ĐĂNG NHẬP</Typography>
      <Grid container spacing={2}>
        <Grid xs={12} item>
          <InputField name="taiKhoan" label="Tài khoản" form={form} />
        </Grid>
        <Grid xs={12} item>
          <PasswordField name="matKhau" label="Mật khẩu" form={form} />
        </Grid>
        <Grid xs={12} item>
          <Button className="py-2" variant="contained" color="primary" type="submit" fullWidth>Đăng nhập</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default SignInForm
