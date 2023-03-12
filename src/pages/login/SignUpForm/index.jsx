import {
  Button, Grid, TextField, Typography
} from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

function SignUpForm() {
  const form = useForm({
    defaultValues: {
      taiKhoan: ''
    }
  })
  const handleSubmit = (values) => {
    console.log('signUp-Value', values)
  }
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Typography className="pt-3 mb-3">ĐĂNG KÝ</Typography>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} item>
          <TextField id="outlined-basic" name="taiKhoan" label="Tài khoản" variant="outlined" fullWidth required />
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField id="outlined-basic" label="Họ tên" variant="outlined" fullWidth required />
        </Grid>
        <Grid xs={12} item>
          <TextField
            id="outlined-basic"
            label="Mật khẩu"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid xs={12} item>
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth required />
        </Grid>
        <Grid xs={12} item>
          <TextField id="outlined-basic" label="Số điện thoại" variant="outlined" fullWidth required />
        </Grid>
        <Grid xs={12} item>
          <Button className="py-2" variant="contained" color="primary" type="submit" fullWidth>Đăng ký</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default SignUpForm
