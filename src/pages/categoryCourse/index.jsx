import { CardCourse } from 'components'
import { GROUP_ID } from 'constant'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListCourseByCateAction } from 'stores'
import { StyledCategory } from './styled'

function CategoryCourse(props) {
  const { name } = props.match.params
  const dispatch = useDispatch()
  const { listCoursebyCate } = useSelector((state) => state.courseReducer)
  useEffect(() => {
    dispatch(getListCourseByCateAction({
      queries: {
        maDanhMuc: name,
        MaNhom: GROUP_ID
      }
    }))
  }, [name])

  const renderCourseList = useMemo(() => listCoursebyCate?.map((course) => (
    <div className="col-xl-3 col-lg-4 col-md-6 mt-4 listCourseCate__content__item " key={course.maKhoaHoc}>
      <CardCourse course={course} />
    </div>
  )), [listCoursebyCate])

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
