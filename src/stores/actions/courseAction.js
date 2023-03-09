import { toast } from 'react-toastify'
import { getCategoryService } from 'services'
import { SET_CATEGORY } from 'stores/types'

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
