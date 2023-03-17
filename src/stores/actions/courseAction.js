import { toast } from 'react-toastify'
import {
  cancelRegistrationService,
  getCategoryService, getCoursesWithPaginationService, getDetailCourseService, getListCourseByCateService, getCoursesService
} from 'services'
import {
  SET_CATEGORY, SET_DETAIL_COURSE, SET_LIST_COURSE, SET_LIST_COURSE_BY_CATE, SET_LIST_COURSE_PAGINATION
} from 'stores/types'
import Swal from 'sweetalert2'

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

export const getListCourseAction = (payload = {}) => async (dispatch) => {
  try {
    const result = await getCoursesService(payload)
    dispatch({
      type: SET_LIST_COURSE,
      payload: result.data
    })
  } catch (error) {
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
