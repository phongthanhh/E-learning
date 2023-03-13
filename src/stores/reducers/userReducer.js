import { ACTICE_LOGIN_PAGE } from 'stores/types'

const initialState = {
  activeLoginPage: null
}

export const userReducer = (state = initialState, { type }) => {
  switch (type) {
    case ACTICE_LOGIN_PAGE:
      return { ...state, activeLoginPage: false }
    default:
      return state
  }
}
