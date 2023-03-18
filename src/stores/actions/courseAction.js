import {
  cancelRegistrationService,
  getCategoryService, getCoursesWithPaginationService, getDetailCourseService, getListCourseByCateService, getCoursesService, registerCourseService
} from 'services'
import {
  SET_CATEGORY, SET_DETAIL_COURSE, GET_COURSES, SET_LIST_COURSE_BY_CATE, SET_LIST_COURSE_PAGINATION
} from 'stores/types'
import Swal from 'sweetalert2'
import { failureAction, requestAction, successAction } from 'utils'

export const getCategoryAction = () => async (dispatch) => {
  try {
    const data = await getCategoryService()
    dispatch({
      type: SET_CATEGORY,
      payload: data
    })
  } catch (error) {
    throw Error(error)
  }
}

export const getCoursesAction = (payload = { queries: {} }) => async (dispatch) => {
  dispatch({ type: requestAction(GET_COURSES) })
  try {
    const data = await getCoursesService(payload)
    dispatch({
      type: successAction(GET_COURSES),
      payload: data
    })
  } catch (error) {
    dispatch({
      type: failureAction(GET_COURSES),
      error
    })
  }
}

export const getDetailCourseAction = (courseCode) => async (dispatch) => {
  try {
    const data = await getDetailCourseService(courseCode)
    dispatch({
      type: SET_DETAIL_COURSE,
      payload: data
    })
  } catch (error) {
    throw Error(error)
  }
}

export const getCoursesWithPaginationAction = (query) => async (dispatch) => {
  try {
    const data = await getCoursesWithPaginationService(query)
    dispatch({
      type: SET_LIST_COURSE_PAGINATION,
      payload: data
    })
  } catch (error) {
    throw Error(error)
  }
}

export const getListCourseByCateAction = (queries) => async (dispatch) => {
  try {
    const data = await getListCourseByCateService(queries)
    dispatch({
      type: SET_LIST_COURSE_BY_CATE,
      payload: data
    })
  } catch (error) {
    throw Error(error)
  }
}

export const cancelRegistrationAction = (payload) => async () => {
  try {
    const data = await cancelRegistrationService(payload)
    Swal.fire(
      `${data}`,
      'Hẹn gặp lại bạn ở khóa học sau!',
      'success'
    )
  } catch (error) {
    throw Error(error)
  }
}

export const registerCourseAction = (data) => async () => {
  try {
    await registerCourseService(data)
    Swal.fire(
      'Đăng ký khóa học thành công',
      'Chúc bạn học tập thật tốt!',
      'success'
    )
  } catch (error) {
    toast.error(error.response?.data)
  }
}
