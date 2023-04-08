import {
  Button, Grid, Typography
} from '@mui/material'
import { InputField, PasswordField } from 'components'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { GROUP_ID } from 'constant'
import { useDispatch } from 'react-redux'
import { signUpAction } from 'stores'
import { schema } from './schema'

function SignUpForm() {
  const dispatch = useDispatch()
  const form = useForm({
    defaultValues: {
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      soDT: '',
      maNhom: GROUP_ID,
      email: ''
    },
    resolver: yupResolver(schema),
    mode: 'onTouched'
  })

  const handleSubmit = (data) => {
    dispatch(signUpAction(data))
    form.reset()
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Typography variant="h5" component="h5" className="pt-3 mb-3">ĐĂNG KÝ</Typography>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} item>
          <InputField name="taiKhoan" label="Tài khoản" form={form} />
        </Grid>
        <Grid xs={12} sm={6} item>
          <InputField name="hoTen" label="Họ tên" form={form} />
        </Grid>
        <Grid xs={12} item>
          <PasswordField name="matKhau" label="Mật khẩu" form={form} />
        </Grid>
        <Grid xs={12} item>
          <InputField name="email" label="Email" form={form} />
        </Grid>
        <Grid xs={12} item>
          <InputField name="soDT" label="Số điện thoại" form={form} />
        </Grid>
        <Grid xs={12} item>
          <Button className="py-2" variant="contained" color="primary" type="submit" fullWidth>Đăng ký</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default SignUpForm
