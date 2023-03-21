import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoursesAction } from 'stores'

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
