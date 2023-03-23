import { SWITCH_THEME } from 'stores/types'

const initialState = {
  isLight: true
}

export const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SWITCH_THEME:
      return { ...state, isLight: payload }

    default:
      return state
  }
}
