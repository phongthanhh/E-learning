import { ReferCourse } from 'components'
import React, { useEffect, useState } from 'react'
import { getDetailCourseService } from 'services'
import MainCourse from './MainCourse'
import SidebarCourse from './SidebarCourse'
import { StyledDetail } from './styled'

function Detail(props) {
  const { id } = props.match.params

  const [detailCourse, setDetailCourse] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetailCourseService(id)
      if (data) setDetailCourse(data.data)
    }
    fetchData()
  }, [])

  return (
    <StyledDetail>
      <div className="titleCourse">
        <h3>THÔNG TIN KHÓA HỌC</h3>
        <p>TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!</p>
      </div>
      <div className="detailcontainer">
        <div className="row detailcontainer__content">
          <div className="col-lg-8 col-md-7">
            <MainCourse detailCourse={detailCourse} />
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

export default Detail
