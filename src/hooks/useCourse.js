import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoursesAction, getCoursesByCateAction } from 'stores'
import { GROUP_ID } from 'constant'

export const useCourses = () => {
  // Use hooks
  const dispatch = useDispatch()
  const { courses } = useSelector((state) => state.courseReducer)
  // End use hooks

  useEffect(() => {
    dispatch(getCoursesAction())
  }, [dispatch])

  return {
    courses
  }
}

export const useCourseByCate = (name) => {
  // Use hook
  const dispatch = useDispatch()
  const { coursesByCate } = useSelector((state) => state.courseReducer)
  // End use hook

  useEffect(() => {
    dispatch(getCoursesByCateAction({
      queries: {
        maDanhMuc: name,
        MaNhom: GROUP_ID
      }
    }))
  }, [name, dispatch])

  return { coursesByCate }
}
