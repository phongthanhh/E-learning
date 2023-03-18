/* eslint-disable no-unused-vars */
import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Grid, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { GROUP_ID, ROUTES_NAME, VALIDATE } from 'constant'
import { InputField, PasswordField } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { updateInfoUserAction } from 'stores'
import { history } from 'App'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}
function ModalInfo({ nameBtn, userInfo, closeModal }) {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const schema = yup.object({
    // eslint-disable-next-line max-len
    matKhau: yup.string().required('Vui lòng nhập mật khẩu').matches(VALIDATE.PASSWORD_REGEX, 'Mật khẩu bắt buộc tối thiểu 8 kí tự, ít nhất 1 chữ hoa, 1 chữ thường và 1 số )'),
    hoTen: yup.string().required('Vui lòng nhập họ tên'),
    soDT: yup.string().required('Vui lòng nhập số điện thoại').matches(VALIDATE.PHONE_REGEX, 'Số điện thoại bắt buộc bao gồm: số và tối thiểu 10 số'),
    email: yup.string().required('Vui lòng nhập email').matches(VALIDATE.EMAIL_REGEX, 'Email không đúng định dạng. VD( hopeyouhappy@gmail.com)')
  }).required()

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched'
  })

  const handleSubmit = (data) => {
    form.setValue('taiKhoan', userInfo.taiKhoan)
    form.setValue('maLoaiNguoiDung', userInfo.maLoaiNguoiDung)
    form.setValue('maNhom', GROUP_ID)
    dispatch(updateInfoUserAction(data))
    setOpen(false)
    closeModal()
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>{nameBtn}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className=" mb-3">
            Thông tin cá nhân
          </Typography>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Grid id="modal-modal-description" container spacing={2}>
              <Grid xs={12} item>
                <InputField defaultValue={userInfo?.taiKhoan} name="taiKhoan" disabled label="Tài khoản" form={form} />
              </Grid>
              <Grid xs={12} item>
                <PasswordField defaultValue={userInfo?.matKhau} name="matKhau" label="Mật khẩu" form={form} />
              </Grid>
              <Grid xs={12} item>
                <InputField defaultValue={userInfo?.hoTen} name="hoTen" label="Họ tên" form={form} />
              </Grid>
              <Grid xs={12} item>
                <InputField defaultValue={userInfo?.soDT} name="soDT" label="Số điện thoại" form={form} />
              </Grid>
              <Grid xs={12} item>
                <InputField defaultValue={userInfo?.email} name="email" label="Email" form={form} />
              </Grid>
              <Grid xs={12} item>
                <Button className="py-2" variant="contained" color="primary" type="submit" fullWidth>Cập nhật</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
export default React.memo(ModalInfo)
