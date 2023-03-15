/* eslint-disable max-len */
import React from 'react'
import CourseItem from './CourseItem'
import { StyledInfo } from './styled'

function Info() {
  return (
    <StyledInfo>
      <div className="row">
        <div className="col-lg-3 col-12">
          <div className="info">
            <p className="info__title">Thông tin cá nhân</p>
            <div className="info__img">
              <img className="info__img__img" src="https://i.pravatar.cc/300?u=63453463" alt="avatar" />
            </div>
            <div className="info__item">
              <p>Họ tên</p>
              <strong>Phong Thanh</strong>
            </div>
            <div className="info__item">
              <p>Email</p>
              <strong>phongthanh12@gmail.com</strong>
            </div>
            <div className="info__item">
              <p>Số điện thoại</p>
              <strong>0125582568</strong>
            </div>
            <div className="info__item">
              <p>Đối tượng</p>
              <strong>Học viên</strong>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-12">
          <div className="course">
            <div className="course__head">
              <h6>Khóa học của tôi</h6>
            </div>
            <div className="course__body">
              <CourseItem />
            </div>
          </div>
        </div>
      </div>
    </StyledInfo>
  )
}

export default Info
