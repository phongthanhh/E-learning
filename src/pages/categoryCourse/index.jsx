import { CardGlobal } from 'components'
import React, { useEffect, useMemo, useState } from 'react'
import { getListCourseCateService } from 'services'
import { StyledCategory } from './styled'

function CategoryCourse(props) {
  const { name } = props.match.params
  const [listCourseCate, setListCourseCate] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const data = await getListCourseCateService(name)
      if (data) setListCourseCate(data.data)
    }
    fetchData()
  }, [name])

  const renderCourseList = useMemo(() => listCourseCate?.map((course) => (
    <div className="col-xl-3 col-lg-4 col-md-6 mt-4 listCourseCate__content__item " key={course.maKhoaHoc}>
      <CardGlobal course={course} />
    </div>
  )), [listCourseCate])

  return (
    <StyledCategory>
      <div className="titleCourse">
        <h3>Khóa học theo danh mục</h3>
        <p>Hãy chọn khóa học mong muốn !!!</p>
      </div>
      <div className="listCourseCate">
        <div className="listCourseCate__name">
          <button type="button" className="listCourseCate__name__button">
            Lập trình
            {' '}
            {name}
          </button>
        </div>
        <div className="mt-3 listCourseCate__content">
          <div className="row">
            {renderCourseList}
          </div>
        </div>
      </div>
    </StyledCategory>
  )
}

export default CategoryCourse
