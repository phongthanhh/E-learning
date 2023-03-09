import { toast } from 'react-toastify'
import { getCategoryService, getListCourseService } from 'services'
import { SET_CATEGORY, SET_LIST_COURSE } from 'stores/types'

export const getCategoryAction = () => async (dispatch) => {
  try {
    const result = await getCategoryService()
    dispatch({
      type: SET_CATEGORY,
      payload: result.data
    })
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}

export const getListCourseAction = () => async (dispatch) => {
  try {
    const result = await getListCourseService()
    dispatch({
      type: SET_LIST_COURSE,
      payload: result.data
    })
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}
