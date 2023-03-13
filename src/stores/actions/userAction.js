import { toast } from 'react-toastify'
import { signUpService } from 'services'
import { ACTIVE_LOGIN_PAGE } from 'stores/types'
import Swal from 'sweetalert2'

export const signUpAction = (data) => async (dispatch) => {
  try {
    await signUpService(data)
    Swal.fire({
      icon: 'success',
      title: 'Đăng ký thành công',
      text: 'Bạn có thể đăng nhập ngay bây giờ',
      confirmButtonText: 'OK'
    }).then(() => {
      dispatch({ type: ACTIVE_LOGIN_PAGE })
    })
  } catch (error) {
    toast.error(error.response?.data)
  }
}
