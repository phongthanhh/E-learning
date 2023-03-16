import { history } from 'App'
import { ACCESS_TOKEN, ROUTES_NAME, USER_LOGIN } from 'constant'
import { toast } from 'react-toastify'
import { getInfoUserService, loginService, signUpService } from 'services'
import { ACTIVE_LOGIN_PAGE, LOG_IN, SET_INFO_USER } from 'stores/types'
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

export const loginAction = (data) => async (dispatch) => {
  try {
    const result = await loginService(data)
    window.localStorage.setItem(ACCESS_TOKEN, result.data.accessToken)
    window.localStorage.setItem(USER_LOGIN, JSON.stringify(result.data))
    dispatch({
      type: LOG_IN,
      payload: result.data
    })
    history.push(ROUTES_NAME.HOME)
    toast.success('Đăng nhập thành công !')
  } catch (error) {
    toast.error(error.response?.data)
  }
}

export const getInfoUserAction = () => async (dispatch) => {
  try {
    const result = await getInfoUserService()
    dispatch({
      type: SET_INFO_USER,
      payload: result.data
    })
  } catch (error) {
    toast.error(error.response?.data)
  }
}
