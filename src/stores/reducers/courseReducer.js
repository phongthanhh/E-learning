import {
  SET_CATEGORY, SET_DETAIL_COURSE, GET_COURSES, SET_LIST_COURSE_BY_CATE, SET_LIST_COURSE_PAGINATION
} from 'stores/types'
import { failureAction, requestAction, successAction } from 'utils'

const courses = {
  isLoading: false,
  data: [],
  error: null
}
// const detailCourse = {
//   isLoading: false,
//   data:{},
//   error: null
// }
const initialState = {
  categoryArr: [],
  courses: { ...courses },
  detailCourse: null,
  listCourseWithPagination: {},
  listCourseByCate: [],
  coursesForSearch: []
}

export const courseReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case SET_CATEGORY:
      return { ...state, categoryArr: payload }

    // For get courses
    case requestAction(GET_COURSES): {
      return {
        ...state,
        courses: { ...state.courses, isLoading: true }
      }
    }
    case successAction(GET_COURSES):
      return {
        ...state,
        courses: { ...state.courses, isLoading: false, data: payload },
        coursesForSearch: payload.map((course) => ({ id: course.maKhoaHoc, label: course.tenKhoaHoc, image: course.hinhAnh }))
      }
    case failureAction(GET_COURSES):
      return {
        ...state,
        courses: { ...state.courses, isLoading: false, error }
      }
    // For get course detail
    case SET_DETAIL_COURSE:
      return { ...state, detailCourse: payload }
    // For get course with pag
    case SET_LIST_COURSE_PAGINATION:
      return { ...state, listCourseWithPagination: payload }
    // For get course by categories
    case SET_LIST_COURSE_BY_CATE:
      return { ...state, listCourseByCate: payload }

    default:
      return state
  }
}
