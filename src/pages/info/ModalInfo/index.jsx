import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Grid } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputField, PasswordField } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { updateInfoUserAction } from 'stores'
import { LoadingButton } from '@mui/lab'
import { schema } from './schema'

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

function ModalInfo({ open, onClose }) {
  const dispatch = useDispatch()
  const { userInfo, isUpdating } = useSelector((state) => state.userReducer)
  const formMethods = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched'
  })

  const { handleSubmit, reset } = formMethods

  const setValues = React.useCallback(() => {
    const { chiTietKhoaHocGhiDanh, ...newUserInfo } = userInfo
    reset(newUserInfo)
  }, [reset, userInfo])

  React.useEffect(() => {
    if (Object.keys(userInfo).length) {
      setValues()
    }
  }, [userInfo, setValues])

  const onSubmit = (formData) => {
    dispatch(updateInfoUserAction({
      data: formData,
      callback: {
        done: () => {
          onClose()
        }
      }
    }))
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className=" mb-3">
            Thông tin cá nhân
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid id="modal-modal-description" container spacing={2}>
              <Grid xs={12} item>
                <InputField name="taiKhoan" disabled label="Tài khoản" form={formMethods} />
              </Grid>
              <Grid xs={12} item>
                <PasswordField name="matKhau" label="Mật khẩu" form={formMethods} />
              </Grid>
              <Grid xs={12} item>
                <InputField name="hoTen" label="Họ tên" form={formMethods} />
              </Grid>
              <Grid xs={12} item>
                <InputField name="soDT" label="Số điện thoại" form={formMethods} />
              </Grid>
              <Grid xs={12} item>
                <InputField name="email" label="Email" form={formMethods} />
              </Grid>
              <Grid xs={12} item>
                <LoadingButton className="py-2" loading={isUpdating} type="submit" variant="contained" fullWidth>
                  Cập nhật
                </LoadingButton>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
export default React.memo(ModalInfo)
