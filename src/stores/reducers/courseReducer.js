import { SET_CATEGORY } from 'stores/types'

const initialState = {
  categoryArr: []
}

export const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATEGORY:
      return { ...state, categoryArr: payload }
    default:
      return state
  }
}
