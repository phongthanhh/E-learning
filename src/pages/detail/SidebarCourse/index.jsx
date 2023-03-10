import React from 'react'
import SchoolIcon from '@mui/icons-material/School'
import BoltIcon from '@mui/icons-material/Bolt'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import { StyledSidebar } from './styled'

function SidebarCourse() {
  return (
    <StyledSidebar>
      <img className="sidebar__img" src="https://thuvienanime.com/wp-content/uploads/2021/09/nang-luc-cua-tieu-viem.jpeg" alt="" />
      <div className="sidebar__price">
        <p>
          <BoltIcon className="sidebar__price__icon" />
          500.000 đ
        </p>
      </div>
      <button type="button" className="btn__global btn__signUp">Đăng ký</button>
      <div className="sidebar__detail">
        <ul>
          <li>
            <p>
              Ghi danh:
              <span> 10 học viên</span>
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
          <input type="text" />
        </div>
      </div>
    </StyledSidebar>
  )
}

export default SidebarCourse
