import { toast } from 'react-toastify'
import {
  getCategoryService, getCoursesWithPaginationService, getDetailCourseService, getListCourseByCateService, getListCourseService
} from 'services'
import {
  SET_CATEGORY, SET_DETAIL_COURSE, SET_LIST_COURSE, SET_LIST_COURSE_BY_CATE, SET_LIST_COURSE_PAGINATION
} from 'stores/types'

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

export const getListCourseAction = (groupId) => async (dispatch) => {
  try {
    const result = await getListCourseService(groupId)
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
