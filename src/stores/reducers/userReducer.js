import { USER_LOGIN } from 'constant'
import {
  ACTIVE_LOGIN_PAGE, GET_USER_INFO, LOG_IN, SIGN_OUT, UPDATE_USER_INFO
} from 'stores/types'
import { failureAction, requestAction, successAction } from 'utils'
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
    case LOG_IN:
      return { ...state, userLogin: payload }
    case SIGN_OUT:
      return { ...state, userLogin: null }
    case successAction(GET_USER_INFO):
      return { ...state, userInfo: payload }

    // For update user info
    case requestAction(UPDATE_USER_INFO):
      return { ...state, isUpdating: true }
    case successAction(UPDATE_USER_INFO):
      return { ...state, isUpdating: false }
    case failureAction(UPDATE_USER_INFO):
      return { ...state, isUpdating: false, error }
    default:
      return state
  }
}
