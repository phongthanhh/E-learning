import { STOP_LOADING_GLOBAL } from 'stores/types'
import { requestAction } from 'utils'

const initialState = {
  isLoading: true
}

export const globalReducer = (state = initialState, { type }) => {
  switch (type) {
    case requestAction(STOP_LOADING_GLOBAL):
      return { ...state, isLoading: false }
    default:
      return state
  }
}
