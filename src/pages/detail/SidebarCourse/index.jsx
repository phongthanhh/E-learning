/* eslint-disable no-magic-numbers */
import React, { memo } from 'react'
import SchoolIcon from '@mui/icons-material/School'
import BoltIcon from '@mui/icons-material/Bolt'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'components'
import { TextField } from '@mui/material'
import { convertNumberToVND, getItem } from 'utils'
import { PRICE_COURSE_DETAIL } from 'constant'
import { registerCourseAction } from 'stores'
import { StyledSidebar } from './styled'

function SidebarCourse({ courseCode }) {
  const dispatch = useDispatch()
  const { detailCourse } = useSelector((state) => state.courseReducer)
  const { userLogin } = useSelector((state) => state.userReducer)
  const priceCourse = getItem(PRICE_COURSE_DETAIL)
  const handleRegisterCourse = () => {
    const data = {
      maKhoahoc: courseCode,
      taiKhoan: userLogin.taiKhoan
    }
    dispatch(registerCourseAction(data))
  }
  return (
    <StyledSidebar>
      <Image className="sidebar__img" src={detailCourse !== null ? detailCourse.hinhAnh : ''} />
      <div className="sidebar__price">
        <p>
          <BoltIcon className="sidebar__price__icon" />
          {convertNumberToVND(+priceCourse)}
        </p>
      </div>
      <button onClick={handleRegisterCourse} type="button" className="btn__global btn__signUp">Đăng ký</button>
      <div className="sidebar__detail">
        <ul>
          <li>
            <p>
              Ghi danh:
              <span>
                {' '}
                {detailCourse !== null ? detailCourse.soLuongHocVien : ''}
                {' '}
                học viên
              </span>
            </p>
            <SchoolIcon className="sidebar__detail__icon" />
          </li>
          <li>
            <p>
              Thời gian:
              <span> 18 giờ</span>
            </p>
            <AccessTimeIcon className="sidebar__detail__icon" />
          </li>
          <li>
            <p>
              Bài học:
              <span> 10</span>
            </p>
            <MenuBookIcon className="sidebar__detail__icon" />
          </li>
          <li>
            <p>
              Video:
              <span> 14</span>
            </p>
            <VideoLibraryIcon className="sidebar__detail__icon" />
          </li>
          <li>
            <p>
              Trình độ:
              <span> Người mới bắt đầu</span>
            </p>
            <SignalCellularAltIcon className="sidebar__detail__icon" />
          </li>
        </ul>
        <div className="sidebar__discount">
          <TextField label="Nhập mã giảm giá" name="discount" fullWidth />
        </div>
      </div>
    </StyledSidebar>
  )
}

export default memo(SidebarCourse)
