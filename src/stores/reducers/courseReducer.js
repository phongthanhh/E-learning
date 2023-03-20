/* eslint-disable no-unused-vars */
import {
  GET_CATEGORY, GET_COURSES, GET_DETAIL_COURSE, GET_LIST_COURSE_BY_CATE, GET_LIST_COURSE_PAGINATION
} from 'stores/types'
import { failureAction, requestAction, successAction } from 'utils'

const courses = {
  isLoading: false,
  data: [],
  error: null
}
const detailCourse = {
  isLoading: false,
  data: {},
  error: null
}
const listCourseWithPagination = {
  isLoading: false,
  data: {},
  error: null
}
const listCourseByCate = {
  isLoading: false,
  data: [],
  error: null
}
const initialState = {
  categoryArr: [],
  courses: { ...courses },
  detailCourse: null,
  listCourseWithPagination: { ...listCourseWithPagination },
  listCourseByCate: [],
  coursesForSearch: []
}

export const courseReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    // For get category
    case GET_CATEGORY:
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
    case GET_DETAIL_COURSE:
      return { ...state, detailCourse: payload }

    // For get course with pag
    case requestAction(GET_LIST_COURSE_PAGINATION):
      return {
        ...state,
        listCourseWithPagination: { ...state.listCourseWithPagination, isLoading: true }
      }
    case successAction(GET_LIST_COURSE_PAGINATION):
      return {
        ...state,
        listCourseWithPagination: { ...state.listCourseWithPagination, isLoading: false, data: payload }
      }
    case failureAction(GET_LIST_COURSE_PAGINATION):
      return {
        ...state,
        listCourseWithPagination: { ...state.listCourseWithPagination, isLoading: false, error }
      }

    // For get course by categories
    case GET_LIST_COURSE_BY_CATE:
      return { ...state, listCourseByCate: payload }

    default:
      return state
  }
}
