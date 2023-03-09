/* eslint-disable no-magic-numbers */
import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { AVATAR_CARD, AVATAR_CARD2 } from 'assets'
import { COLORS, FONT_SIZE } from 'themes'
import { StyledCardGlobal } from './styled'

function Cardlobal({ course }) {
  console.log(course)
  return (
    <StyledCardGlobal>
      <img className="card__img" src={course.hinhAnh} alt="" />
      <span className="card__stiker">{course.tenKhoaHoc.length > 27 ? `${course.tenKhoaHoc.substring(0, 27)}...` : course.tenKhoaHoc }</span>
      <div className="card__body">
        <h6 className="card__body__title">{course.moTa.length > 70 ? `${course.moTa.substring(0, 70)}...` : course.moTa}</h6>
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
            {course.nguoiTao.hoTen !== null ? course.nguoiTao.hoTen : 'Ẩn danh'}
          </span>
        </div>
        <div>
          <p style={{ color: COLORS.textCard, textDecorationLine: 'line-through', fontSize: FONT_SIZE.sub }}>
            800.000đ
          </p>
          <p style={{ color: COLORS.global, fontSize: FONT_SIZE.md }}>
            400.000đ
            <LocalOfferIcon style={{
              color: 'red', width: '.8em', height: '.8em', verticalAlign: '-2px'
            }}
            />
          </p>
        </div>
      </div>
      <div className="card__sub">
        <div className="sub__head">
          <img src={AVATAR_CARD2} className="sub__head__img" alt="" />
          <span
            className="ml-2 color__card__title"
            style={{ fontSize: FONT_SIZE.sub }}
          >
            {course.nguoiTao.hoTen !== null ? course.nguoiTao.hoTen : 'Ẩn danh'}
          </span>
        </div>
        <h6 className="py-3">BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC</h6>
        <p className="py-2 pb-3 color__card__title">
          Đã có hơn 6200 bạn đăng
          kí học và có việc làm thông qua chương trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp.
          Khóa học 100% thực hành cường độ cao theo
          dự án thực tế và kết nối doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
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
            className="btn__global btnSubCard"
            style={{ padding: '15px', background: COLORS.global, flexBasis: '77%' }}
          >
            Xem chi tiết
          </button>
          <div className="sub__button__cart">
            <ShoppingCartOutlinedIcon className="sub__button__cart__icon" />
          </div>
        </div>
      </div>
      <div className="card__sale">
        <span>Yêu thích</span>
      </div>
    </StyledCardGlobal>
  )
}

export default Cardlobal
