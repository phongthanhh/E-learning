import { SwiperCarosel } from 'components'
import React from 'react'
import { useSelector } from 'react-redux'
import { StyledReferCourse } from './styled'

function ReferCourse() {
  const { listCourse } = useSelector((state) => state.courseReducer)
  return (
    <StyledReferCourse className="mt-5">
      <h6>Khóa học tham khảo</h6>
      <div>
        <SwiperCarosel listCourse={listCourse} />
      </div>
    </StyledReferCourse>
  )
}

export default ReferCourse
