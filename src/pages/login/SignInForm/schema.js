import * as yup from 'yup'

export const schema = yup.object({
  taiKhoan: yup.string().required('Vui lòng nhập tài khoản'),
  matKhau: yup.string().required('Vui lòng nhập mật khẩu')
}).required()
