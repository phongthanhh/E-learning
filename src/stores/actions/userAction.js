import { ACCESS_TOKEN, ROUTES_NAME, USER_LOGIN } from 'constant'
import { toast } from 'react-toastify'
import {
  getInfoUserService, loginService, signUpService, updateInfoUserService
} from 'services'
import {
  ACTIVE_LOGIN_PAGE, GET_USER_INFO, LOG_IN, UPDATE_USER_INFO
} from 'stores/types'
import Swal from 'sweetalert2'
import {
  failureAction, requestAction, setItem, successAction, transferPage
} from 'utils'

export const signUpAction = (payload) => async (dispatch) => {
  try {
    await signUpService(payload)
    Swal.fire({
      icon: 'success',
      title: 'Đăng ký thành công',
      text: 'Bạn có thể đăng nhập ngay bây giờ',
      confirmButtonText: 'OK'
    }).then(() => {
      dispatch({ type: ACTIVE_LOGIN_PAGE })
    })
  } catch (error) {
    throw Error(error)
  }
}

export const loginAction = (payload) => async (dispatch) => {
  try {
    const data = await loginService(payload)
    setItem(ACCESS_TOKEN, data.accessToken)
    setItem(USER_LOGIN, JSON.stringify(data))
    dispatch({
      type: LOG_IN,
      payload: data
    })
    transferPage(ROUTES_NAME.HOME)
    toast.success('Đăng nhập thành công !')
  } catch (error) {
    throw Error(error)
  }
}

export const getInfoUserAction = () => async (dispatch) => {
  try {
    const data = await getInfoUserService()
    dispatch({
      type: successAction(GET_USER_INFO),
      payload: data
    })
  } catch (error) {
    throw Error(error)
  }
}

export const updateInfoUserAction = (payload) => async (dispatch) => {
  const { data, callback } = payload
  dispatch({ type: requestAction(UPDATE_USER_INFO) })
  try {
    const response = await updateInfoUserService(data)
    const { hoTen } = response
    dispatch({
      type: successAction(GET_USER_INFO),
      payload: response
    })
    dispatch({
      type: successAction(UPDATE_USER_INFO),
      payload: { newHoTen: hoTen }
    })
    Swal.fire({
      icon: 'success',
      title: 'Cập nhật thông tin thành công',
      text: 'Chúc bạn một ngày tốt lành !',
      confirmButtonText: 'OK'
    })
  } catch (error) {
    dispatch({ type: failureAction(UPDATE_USER_INFO), error })
  } finally {
    callback.done()
  }
}
