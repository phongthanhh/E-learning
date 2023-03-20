import { VALIDATE } from 'constant'
import * as yup from 'yup'
// xnMatKhau: yup.string().required('Vui lòng xác nhận mật khẩu').oneOf([yup.ref('matKhau')], 'Mật khẩu không trùng khớp')

export const schema = yup.object({
  taiKhoan: yup.string().required('Vui lòng nhập tài khoản'),
  // eslint-disable-next-line max-len
  matKhau: yup.string().required('Vui lòng nhập mật khẩu').matches(VALIDATE.PASSWORD_REGEX, 'Mật khẩu bắt buộc tối thiểu 8 kí tự, ít nhất 1 chữ hoa, 1 chữ thường và 1 số )'),
  hoTen: yup.string().required('Vui lòng nhập mật khẩu'),
  soDT: yup.string().required('Vui lòng nhập số điện thoại').matches(VALIDATE.PHONE_REGEX, 'Số điện thoại bắt buộc bao gồm: số và tối thiểu 10 số'),
  email: yup.string().required('Vui lòng nhập email').matches(VALIDATE.EMAIL_REGEX, 'Email không đúng định dạng. VD( hopeyouhappy@gmail.com)')
}).required()
