import { SET_CATEGORY, SET_DETAIL_COURSE, SET_LIST_COURSE } from 'stores/types'

const initialState = {
  categoryArr: [],
  listCourse: [],
  detailCourse: null
}

export const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATEGORY:
      return { ...state, categoryArr: payload }
    case SET_LIST_COURSE:
      return { ...state, listCourse: payload }
    case SET_DETAIL_COURSE:
      return { ...state, detailCourse: payload }
    default:
      return state
  }
}
