import { AVATAR_CARD2 } from 'assets'
import React, { memo } from 'react'
import { COLORS, FONT_SIZE } from 'themes'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import { StyledTooltipCourse } from './styled'

function TooltipCourse({ course }) {
  return (
    <StyledTooltipCourse>
      <div className="sub__head">
        <img src={AVATAR_CARD2} className="sub__head__img" alt="avatar" />
        <span
          className="ml-2 color__card__title"
          style={{ fontSize: FONT_SIZE.sub }}
        >
          {course.nguoiTao.hoTen || 'Ẩn danh'}
        </span>
      </div>
      <h6 className="py-3">{course.tenKhoaHoc}</h6>
      <p className="py-2 pb-3 color__card__title">
        {course.moTa}
      </p>
      <div className="card__icon py-2 pb-3">
        <span>
          <AccessTimeOutlinedIcon className="card__icon__span" style={{ color: COLORS.primary }} />
          8 giờ
        </span>
        <span>
          <CalendarMonthOutlinedIcon className="card__icon__span" style={{ color: COLORS.lightRed }} />
          4 tuần
        </span>
        <span>
          <SignalCellularAltIcon className="card__icon__span" style={{ color: COLORS.lightBlue }} />
          tất cả
        </span>
      </div>
      <div className="sub__button d-flex justify-content-between">
        <button
          type="button"
          className="btn__global btn__SubCard"
        >
          Xem chi tiết
        </button>
        <div className="sub__button__cart">
          <ShoppingCartOutlinedIcon className="sub__button__cart__icon" />
        </div>
      </div>
    </StyledTooltipCourse>
  )
}

export default memo(TooltipCourse)
