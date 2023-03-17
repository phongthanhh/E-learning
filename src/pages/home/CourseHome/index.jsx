import { SlideCourses } from 'components'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoursesAction } from 'stores'
import { StyledCourseHome } from './styled'

const LIMIT_VIEWS_POPULAR_COURSE = 99

function CourseHome() {
  // Use hooks
  const dispatch = useDispatch()
  const { courses: { data } } = useSelector((state) => state.courseReducer)
  // End use hooks

  const popularCourses = useMemo(() => data.filter((item) => item.luotXem > LIMIT_VIEWS_POPULAR_COURSE), [data])

  useEffect(() => {
    dispatch(getCoursesAction())
  }, [dispatch])

  return (
    <StyledCourseHome>
      <SlideCourses title="Khóa học phổ biến" courses={popularCourses} />
      <SlideCourses title="Khóa học tham khảo" courses={data} />
    </StyledCourseHome>
  )
}

export default CourseHome
