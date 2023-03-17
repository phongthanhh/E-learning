import { toast } from 'react-toastify'
import {
  cancelRegistrationService,
  getCategoryService, getCoursesWithPaginationService, getDetailCourseService, getListCourseByCateService, getCoursesService
} from 'services'
import {
  SET_CATEGORY, SET_DETAIL_COURSE, GET_COURSES, SET_LIST_COURSE_BY_CATE, SET_LIST_COURSE_PAGINATION
} from 'stores/types'
import Swal from 'sweetalert2'
import { failureAction, requestAction, successAction } from 'utils'

export const getCategoryAction = () => async (dispatch) => {
  try {
    const result = await getCategoryService()
    dispatch({
      type: SET_CATEGORY,
      payload: result.data
    })
  } catch (error) {
    toast.error(error.response?.data)
  }
}

export const getCoursesAction = (payload = { queries: {} }) => async (dispatch) => {
  dispatch({ type: requestAction(GET_COURSES) })
  try {
    const result = await getCoursesService(payload)
    dispatch({
      type: successAction(GET_COURSES),
      payload: result.data
    })
  } catch (error) {
    dispatch({
      type: failureAction(GET_COURSES),
      error
    })
    toast.error(error.response?.data)
  }
}

export const getDetailCourseAction = (courseCode) => async (dispatch) => {
  try {
    const result = await getDetailCourseService(courseCode)
    dispatch({
      type: SET_DETAIL_COURSE,
      payload: result.data
    })
  } catch (error) {
    toast.error(error.response?.data)
  }
}

export const getCoursesWithPaginationAction = (query) => async (dispatch) => {
  try {
    const result = await getCoursesWithPaginationService(query)
    dispatch({
      type: SET_LIST_COURSE_PAGINATION,
      payload: result.data
    })
  } catch (error) {
    toast.error(error.response?.data)
  }
}

export const getListCourseByCateAction = (queries) => async (dispatch) => {
  try {
    const result = await getListCourseByCateService(queries)
    dispatch({
      type: SET_LIST_COURSE_BY_CATE,
      payload: result.data
    })
  } catch (error) {
    toast.error(error.response?.data)
  }
}

export const cancelRegistrationAction = (data) => async () => {
  try {
    const result = await cancelRegistrationService(data)
    Swal.fire(
      `${result.data}`,
      'Hẹn gặp lại bạn ở khóa học sau!',
      'success'
    )
  } catch (error) {
    toast.error(error.response?.data)
  }
}
