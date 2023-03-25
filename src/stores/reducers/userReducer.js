import { USER_LOGIN } from 'constant'
import {
  ACTIVE_LOGIN_PAGE, GET_USER_INFO, LOG_IN, SIGN_OUT, UPDATE_USER_INFO
} from 'stores/types'
import {
  failureAction, requestAction, successAction, setItem
} from 'utils'
// Check LocalStorage
let userLogin = null // Chưa có localStorage
if (localStorage.getItem(USER_LOGIN)) {
  // Có local => đã login
  userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
  activeLoginPage: null,
  userLogin,
  userInfo: {},
  isUpdating: false
}

export const userReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case ACTIVE_LOGIN_PAGE:
      return { ...state, activeLoginPage: false }
    // for login
    case LOG_IN:
      return { ...state, userLogin: payload }

    // for sign out
    case SIGN_OUT:
      return { ...state, userLogin: null }

    // for get user info
    case requestAction(GET_USER_INFO):
      return { ...state, isUpdating: true }
    case successAction(GET_USER_INFO):
      return { ...state, userInfo: payload }
    case failureAction(GET_USER_INFO):
      return { ...state, isUpdating: false, error }

    // For update user info
    case requestAction(UPDATE_USER_INFO):
      return { ...state, isUpdating: true }
    case successAction(UPDATE_USER_INFO): {
      setItem(USER_LOGIN, JSON.stringify({ ...state.userLogin, hoTen: payload.newHoTen }))
      return { ...state, isUpdating: false, userLogin: { ...state.userLogin, hoTen: payload.newHoTen } }
    }
    case failureAction(UPDATE_USER_INFO):
      return { ...state, isUpdating: false, error }

    default:
      return state
  }
}
