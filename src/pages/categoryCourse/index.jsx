import { CardCourse } from 'components'
import { useCourseByCate } from 'hooks'
import React, { useMemo } from 'react'
import { StyledCategory } from './styled'

function CategoryCourse(props) {
  const { name } = props.match.params
  const { coursesByCate: { data } } = useCourseByCate(name)

  const renderCourseList = useMemo(() => data?.map((course) => (
    <div className="col-xl-3 col-lg-4 col-md-6 mt-4 listCourseCate__content__item " key={course.maKhoaHoc}>
      <CardCourse course={course} />
    </div>
  )), [data])

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
