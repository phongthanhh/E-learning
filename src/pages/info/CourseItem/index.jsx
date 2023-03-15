import React from 'react'
import { StyledCourse } from './styled'

function CourseItem() {
  return (
    <StyledCourse>
      <div className="row">
        <div className="col-xl-3 col-lg-4 course__img">
          <img className="imgNet" src="https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-web-asp-net-2_gp01.jpg" alt="" />
        </div>
        <div className="col-xl-7 col-lg-6 course__content">
          <h6>Lập Trình Web ASP.NET 2</h6>
          <p className="colorCardTitle">ES6 là một chuẩn Javascript mới được đưa ra vào năm 2015 với nhiều quy tắc và cách sử dụng khác nhau...</p>
          <div className="course__content__icon">
            <span className="textCardTitle">
              <i className="far fa-clock iconOclock" />
              {' '}
              8 giờ
            </span>
            <span className="textCardTitle">
              <i className="far fa-calendar iconCalendar" />
              {' '}
              23 giờ
            </span>
            <span className="textCardTitle">
              <i className="fas fa-signal iconLevel " />
              {' '}
              All level
            </span>
          </div>
          <p className="iconStarNet">
            <i className="fas fa-star" />
          </p>
          <div className="course__content__name">
            <img className="imgNetFooter" src="" alt="" />
            <span className="ml-2">Nguyễn Nam</span>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 cancelNet">
          <button type="button" className="btnGlobal">Hủy khóa học</button>

        </div>
      </div>
    </StyledCourse>
  )
}

export default CourseItem
