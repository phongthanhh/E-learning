import { ACCESS_TOKEN, USER_LOGIN } from 'constant'
import { toast } from 'react-toastify'
import {
  getInfoUserService, loginService, signUpService, updateInfoUserService
} from 'services'
import {
  ACTIVE_LOGIN_PAGE, GET_USER_INFO, UPDATE_USER_INFO, STOP_LOADING_GLOBAL
} from 'stores/types'
import Swal from 'sweetalert2'
import {
  failureAction, requestAction, setItem, successAction
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

export const getInfoUserAction = (payload = {}) => async (dispatch) => {
  const { isStopLoadingGlobal } = payload
  try {
    const data = await getInfoUserService()
    dispatch({
      type: successAction(GET_USER_INFO),
      payload: data
    })
    if (isStopLoadingGlobal) {
      dispatch({
        type: requestAction(STOP_LOADING_GLOBAL)
      })
    }
  } catch (error) {
    dispatch({ type: failureAction(GET_USER_INFO), error })
  }
}

export const loginAction = (payload) => async (dispatch) => {
  try {
    const data = await loginService(payload)
    setItem(ACCESS_TOKEN, data.accessToken)
    setItem(USER_LOGIN, JSON.stringify(data))
    dispatch(getInfoUserAction())
    toast.success('Đăng nhập thành công !')
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
