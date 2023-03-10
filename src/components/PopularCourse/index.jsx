/* eslint-disable no-magic-numbers */
import { SwiperCarosel } from 'components'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListCourseAction } from 'stores'
import { StyledPopularCourse } from './styled'

function PopularCourse() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListCourseAction())
  }, [])

  const { listCourse } = useSelector((state) => state.courseReducer)
  const newListCourse = useMemo(() => listCourse.filter((item) => item.luotXem > 99), [listCourse])
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
