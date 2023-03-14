/* eslint-disable no-unused-vars */
import { ReferCourse } from 'components'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDetailCourseAction } from 'stores'
import MainCourse from './MainCourse'
import SidebarCourse from './SidebarCourse'
import { StyledDetail } from './styled'

function Detail(props) {
  const { id } = props.match.params
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDetailCourseAction(id))
  }, [id, dispatch])

  return (
    <StyledDetail>
      <div className="titleCourse">
        <h3>THÔNG TIN KHÓA HỌC</h3>
        <p>TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!</p>
      </div>
      <div className="detailcontainer">
        <div className="row detailcontainer__content">
          <div className="col-lg-8 col-md-7">
            <MainCourse />
          </div>
          <div className="col-lg-4 col-md-5">
            <SidebarCourse />
          </div>
        </div>
      </div>
      <div className="refer__course">
        <ReferCourse />
      </div>
    </StyledDetail>
  )
}

export default memo(Detail)
