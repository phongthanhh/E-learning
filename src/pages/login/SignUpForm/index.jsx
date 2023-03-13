import {
  Button, Grid, Typography
} from '@mui/material'
import { InputField, PasswordField } from 'components'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { GROUP_ID, VALIDATE } from 'constant'
import { useDispatch } from 'react-redux'
import { signUpAction } from 'stores'

function SignUpForm() {
  const dispatch = useDispatch()
  const schema = yup.object({
    taiKhoan: yup.string().required('Vui lòng nhập tài khoản'),
    // eslint-disable-next-line max-len
    matKhau: yup.string().required('Vui lòng nhập mật khẩu').matches(VALIDATE.PASSWORD_REGEX, 'Mật khẩu bắt buộc tối thiểu 8 kí tự, ít nhất 1 chữ hoa, 1 chữ thường và 1 số )'),
    hoTen: yup.string().required('Vui lòng nhập mật khẩu'),
    soDT: yup.string().required('Vui lòng nhập số điện thoại').matches(VALIDATE.PHONE_REGEX, 'Số điện thoại bắt buộc bao gồm: số và tối thiểu 10 số'),
    email: yup.string().required('Vui lòng nhập email').matches(VALIDATE.EMAIL_REGEX, 'Email không đúng định dạng. VD( hopeyouhappy@gmail.com)')
  }).required()

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
