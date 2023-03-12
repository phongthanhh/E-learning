import {
  Button, Grid, TextField, Typography
} from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

function SignInForm() {
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
      <Typography className="pt-3 mb-3">ĐĂNG NHẬP</Typography>
      <Grid container spacing={2}>
        <Grid xs={12} item>
          <TextField id="outlined-basic" name="taiKhoan" label="Tài khoản" variant="outlined" fullWidth required />
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
          <Button className="py-2" variant="contained" color="primary" type="submit" fullWidth>Đăng nhập</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default SignInForm
