import {
  SET_CATEGORY, SET_DETAIL_COURSE, SET_LIST_COURSE, SET_LIST_COURSE_BY_CATE, SET_LIST_COURSE_PAGINATION
} from 'stores/types'

const initialState = {
  categoryArr: [],
  listCourse: [],
  detailCourse: null,
  listCourseWithPagination: {},
  listCourseByCate: []
}

export const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATEGORY:
      return { ...state, categoryArr: payload }
    case SET_LIST_COURSE:
      return { ...state, listCourse: payload }
    case SET_DETAIL_COURSE:
      return { ...state, detailCourse: payload }
    case SET_LIST_COURSE_PAGINATION:
      return { ...state, listCourseWithPagination: payload }
    case SET_LIST_COURSE_BY_CATE:
      return { ...state, listCourseByCate: payload }
    default:
      return state
  }
}
