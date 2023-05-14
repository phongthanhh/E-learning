import { ACCESS_TOKEN, USER_LOGIN } from 'constant'
import {
  ACTIVE_LOGIN_PAGE, GET_USER_INFO, SIGN_OUT, UPDATE_USER_INFO
} from 'stores/types'
import {
  failureAction, requestAction, successAction, setItem, getItem
} from 'utils'

const initialState = {
  activeLoginPage: null,
  userInfo: {},
  isUpdating: false,
  authenticated: false
}

export const userReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case ACTIVE_LOGIN_PAGE:
      return { ...state, activeLoginPage: false }
    // for sign out
    case SIGN_OUT: {
      localStorage.removeItem(USER_LOGIN)
      localStorage.removeItem(ACCESS_TOKEN)
      return { ...state, userInfo: {}, authenticated: false }
    }

    // for get user info
    case successAction(GET_USER_INFO):
      return { ...state, userInfo: payload, authenticated: true }
    case failureAction(GET_USER_INFO):
      return { ...state, authenticated: false, error }

    // For update user info
    case requestAction(UPDATE_USER_INFO):
      return { ...state, isUpdating: true }
    case successAction(UPDATE_USER_INFO): {
      const userLoginLocal = JSON.parse(getItem(USER_LOGIN))
      setItem(USER_LOGIN, JSON.stringify({ ...userLoginLocal, hoTen: payload.newHoTen }))
      return { ...state, isUpdating: false }
    }
    case failureAction(UPDATE_USER_INFO):
      return { ...state, isUpdating: false, error }

    default:
      return state
  }
}
