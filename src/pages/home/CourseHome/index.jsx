import { PopularCourse, ReferCourse } from 'components'
import React from 'react'
import { StyledCourseHome } from './styled'

function CourseHome() {
  return (
    <StyledCourseHome>
      <PopularCourse />
      <ReferCourse />
    </StyledCourseHome>
  )
}

export default CourseHome
