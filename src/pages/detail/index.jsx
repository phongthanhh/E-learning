import { SlideCourses } from 'components'
import { useCourses, useDetailsCourse } from 'hooks'
import React, { memo } from 'react'
import MainCourse from './MainCourse'
import SidebarCourse from './SidebarCourse'
import { StyledDetail } from './styled'

function Detail(props) {
  const { name } = props.match.params

  // Use hooks
  const { courses: { data } } = useCourses()
  useDetailsCourse(name)
  // End use hook

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
            <SidebarCourse courseCode={name} />
          </div>
        </div>
      </div>
      <div className="refer__course">
        <SlideCourses title="Khóa học tham khảo" courses={data} />
      </div>
    </StyledDetail>
  )
}

export default memo(Detail)
