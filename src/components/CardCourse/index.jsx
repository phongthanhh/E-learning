/* eslint-disable no-magic-numbers */
import React, { memo } from 'react'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import { AVATAR_CARD } from 'assets'
import { COLORS, FONT_SIZE } from 'themes'
import { COURSE_FEE, PRICE_COURSE_DETAIL, ROUTES_NAME } from 'constant'
import { Tooltip } from '@mui/material'
import { Image } from 'components'
import { getFeeOfCourse, getFeeOfCourseDefault, setItem } from 'utils'
import { history } from 'App'
import { StyledContainer } from './styled'
import TooltipCourse from './TooltipCourse'

function CardCourse({ course, index }) {
  return (
    <Tooltip
      title={<TooltipCourse course={course} />}
      placement="right"
    >
      <StyledContainer onClick={() => {
        setItem(PRICE_COURSE_DETAIL, getFeeOfCourseDefault(index + 1, COURSE_FEE.DISCOUNT))
        history.push(`${ROUTES_NAME.DETAIL}/${course.maKhoaHoc}`)
      }}
      >
        <Image className="card__img" height="185px" src={course.hinhAnh} alt="courseImage" />
        <span className="card__sticker">{course.tenKhoaHoc.length > 27 ? `${course.tenKhoaHoc.substring(0, 27)}...` : course.tenKhoaHoc }</span>
        <div className="card__body">
          <h6 className="card__body__title">{course.moTa.length > 70 ? `${course.moTa.substring(0, 55)}...` : course.moTa}</h6>
          <div className="card__icon">
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
        </div>
        <div className="card__footer">
          <div className="card__footer__title">
            <div className="footer__img">
              <img src={AVATAR_CARD} alt="avatarCard" className="w-100" />
            </div>
            <span
              style={{ fontSize: FONT_SIZE.sub }}
              className="ml-2 color__card__title"
            >
              {course.nguoiTao.hoTen || 'Ẩn danh'}
            </span>
          </div>
          <div>
            <p style={{ color: COLORS.textCard, textDecorationLine: 'line-through', fontSize: FONT_SIZE.sub }}>
              {getFeeOfCourse(index + 1, COURSE_FEE.INITIAL)}
            </p>
            <p style={{ color: COLORS.global, fontSize: FONT_SIZE.md }}>
              {getFeeOfCourse(index + 1, COURSE_FEE.DISCOUNT)}
              {/* <LocalOfferIcon style={{
                color: 'red', width: '.8em', height: '.8em', verticalAlign: '-2px'
              }}
              /> */}
            </p>
          </div>
        </div>
        <div className="card__sale">
          <span>Yêu thích</span>
        </div>
      </StyledContainer>
    </Tooltip>

  )
}

export default memo(CardCourse)
