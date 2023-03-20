import { SlideCourses } from 'components'
import { useCourses } from 'hooks'
import React, { useMemo } from 'react'
import { StyledCourseHome } from './styled'

const LIMIT_VIEWS_POPULAR_COURSE = 99

function CourseHome() {
  // Use hooks
  const { courses: { isLoading, data } } = useCourses()
  // End use hooks

  const popularCourses = useMemo(() => data.filter((item) => item.luotXem > LIMIT_VIEWS_POPULAR_COURSE), [data])

  return (
    <StyledCourseHome>
      <SlideCourses isLoading={isLoading} title="Khóa học phổ biến" courses={popularCourses} />
      <SlideCourses isLoading={isLoading} title="Khóa học tham khảo" courses={data} />
    </StyledCourseHome>
  )
}

export default CourseHome
