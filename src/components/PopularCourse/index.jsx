/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */
import { SwiperCarosel } from 'components'
import React from 'react'
import { useSelector } from 'react-redux'
import { StyledPopularCourse } from './styled'

function PopularCourse() {
  const { listCourse } = useSelector((state) => state.courseReducer)
  const newListCourse = listCourse.filter((item) => item.luotXem > 99)
  return (
    <StyledPopularCourse>
      <h6>Khóa học phổ biến</h6>
      <div>
        <SwiperCarosel listCourse={newListCourse} />
      </div>
    </StyledPopularCourse>
  )
}

export default PopularCourse
