import { USER_LOGIN } from 'constant'
import {
  ACTIVE_LOGIN_PAGE, LOG_IN, SET_INFO_USER, SIGN_OUT
} from 'stores/types'
// Check LocalStorage
let userLogin = null // Chưa có localStorage
if (localStorage.getItem(USER_LOGIN)) {
  // Có local => đã login
  userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
  activeLoginPage: null,
  userLogin,
  userInfo: {}
}

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIVE_LOGIN_PAGE:
      return { ...state, activeLoginPage: false }
    case LOG_IN:
      return { ...state, userLogin: payload }
    case SIGN_OUT:
      return { ...state, userLogin: null }
    case SET_INFO_USER:
      return { ...state, userInfo: payload }
    default:
      return state
  }
}
