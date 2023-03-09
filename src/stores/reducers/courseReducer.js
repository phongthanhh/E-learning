import { SET_CATEGORY, SET_LIST_COURSE } from 'stores/types'

const initialState = {
  categoryArr: [],
  listCourse: []
}

export const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATEGORY:
      return { ...state, categoryArr: payload }
    case SET_LIST_COURSE:
      return { ...state, listCourse: payload }
    default:
      return state
  }
}
