import { THEME } from 'constant'
import { SWITCH_THEME } from 'stores/types'
import { getItem } from 'utils'

let themeMode = 'light'
if (getItem(THEME)) {
  themeMode = getItem(THEME)
}
const initialState = {
  themeMode
}

export const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SWITCH_THEME:
      return { ...state, themeMode: payload }

    default:
      return state
  }
}
