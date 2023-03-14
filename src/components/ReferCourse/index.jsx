import { SwiperCarosel } from 'components'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListCourseAction } from 'stores'
import { StyledReferCourse } from './styled'

function ReferCourse() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListCourseAction())
  }, [dispatch])

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
