import { Button, Rating } from '@mui/material'
import { INSTRUTOR } from 'assets'
import { Image } from 'components'
import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import { cancelRegistrationAction } from 'stores'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { StyledCourse } from './styled'

const LIMITED_STRING_LENGTH = 110

function CourseItem({ course, userName }) {
  const dispatch = useDispatch()
  const handleCancelCourse = () => {
    const data = {
      maKhoaHoc: course.maKhoaHoc,
      taiKhoan: userName
    }
    Swal.fire({
      title: 'Bạn có muốn Hủy khóa học?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Hủy khóa học',
      cancelButtonText: 'Suy nghĩ lại'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(cancelRegistrationAction(data))
      }
    })
  }
  return (
    <StyledCourse>
      <div className="row">
        <div className="col-xl-3 col-lg-4 mb-3 mb-lg-0  course__img">
          <Image className="course__img__img" src={course?.hinhAnh} alt="" />
        </div>
        <div className="col-xl-6 col-lg-6 course__content">
          <div className="course__content__head">
            <h6>{course?.tenKhoaHoc}</h6>
            <p className="course__content__head__decs">
              {course.moTa.length > LIMITED_STRING_LENGTH
                ? `${course.moTa.substring(0, LIMITED_STRING_LENGTH)}...` : course.moTa}
            </p>
          </div>
          <div className="course__content__body">
            <div className="course__content__body__icon">
              <span className="icon__title">
                <AccessTimeIcon className="icon__title__icon icon1" />
                8 giờ
              </span>
              <span className="icon__title">
                <CalendarTodayIcon className="icon__title__icon icon2" />
                23 giờ
              </span>
              <span className="icon__title">
                <SignalCellularAltIcon className="icon__title__icon icon3" />
                All level
              </span>
            </div>
            <p className="iconStarNet">
              <Rating name="read-only" value={5} readOnly />
            </p>
            <div className="course__content__body__name">
              <Image width="40px" height="40px" src={INSTRUTOR} alt="" />
              <span className="ml-2">{course?.tenKhoaHoc}</span>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-2 course__cancel">
          <Button
            variant="contained"
            color="error"
            onClick={handleCancelCourse}
          >
            Hủy khóa học

          </Button>
        </div>
      </div>
    </StyledCourse>
  )
}

export default CourseItem
