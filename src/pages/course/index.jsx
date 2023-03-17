import React, { useEffect, useMemo, useState } from 'react'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import { CardCourse } from 'components'
import Pagination from '@mui/material/Pagination'
import { GROUP_ID, PAGE_SIZE } from 'constant'
import { getCoursesWithPaginationAction } from 'stores'
import { useDispatch, useSelector } from 'react-redux'
import { StyledCourse } from './styled'

function Course() {
  // Use State
  const [page, setPage] = useState(1)

  // Use Hook
  const dispatch = useDispatch()
  const { listCourseWithPagination } = useSelector((state) => state.courseReducer)
  useEffect(() => {
    dispatch(getCoursesWithPaginationAction({
      queries: { page, pageSize: PAGE_SIZE, MaNhom: GROUP_ID }
    }))
  }, [page, dispatch])

  const handlePageChange = (e, value) => {
    setPage(value)
  }

  const renderListCourse = useMemo(() => listCourseWithPagination.items?.map((course) => (
    <div className="col-xl-3 col-lg-4 col-md-6 mt-4  courseListPage__content__item" key={course.maKhoaHoc}>
      <CardCourse course={course} />
    </div>
  )), [listCourseWithPagination])

  return (
    <StyledCourse>
      <div className="titleCourse">
        <h3>Khóa học</h3>
        <p>Bắt đầu hành trình nào!!!</p>
      </div>

      <div className="coursesContainer">
        <div className="row">
          <div className="col-md-2 col-sm-4 courses__boxItem">
            <div className="courses__box bgStyle1">
              <h6>Chương trình học</h6>
              <LaptopMacIcon className="courses__box__icon" />
              <p>300</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 courses__boxItem">
            <div className="courses__box bgStyle2">
              <h6>Nhà sáng tạo</h6>
              <CameraAltIcon className="courses__box__icon" />
              <p>10000</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 courses__boxItem">
            <div className="courses__box bgStyle3">
              <h6>Nhà thiết kế</h6>
              <BusinessCenterIcon className="courses__box__icon" />
              <p>400</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 courses__boxItem">
            <div className="courses__box bgStyle4">
              <h6>Bài giảng</h6>
              <MenuBookIcon className="courses__box__icon" />
              <p>3000</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 courses__boxItem">
            <div className="courses__box bgStyle5">
              <h6>Video</h6>
              <PlayCircleIcon className="courses__box__icon" />
              <p>40000</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 courses__boxItem">
            <div className="courses__box bgStyle6">
              <h6>Lĩnh vực</h6>
              <AcUnitIcon className="courses__box__icon" />
              <p>200</p>
            </div>
          </div>
        </div>
      </div>

      <div className="courseListPage">
        <h6>
          <i className="fas fa-bookmark" />
          Danh sách khóa học
        </h6>
        <div className="row courseListPage__content">
          {renderListCourse}
        </div>
      </div>
      <div className="paginationPage">
        <Pagination count={listCourseWithPagination?.totalPages} variant="outlined" color="primary" onChange={handlePageChange} />
      </div>
    </StyledCourse>
  )
}

export default Course
