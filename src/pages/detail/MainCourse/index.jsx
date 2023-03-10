/* eslint-disable no-irregular-whitespace */
import { Rating } from '@mui/material'
import { INSTRUTOR } from 'assets'
import React from 'react'
import SchoolIcon from '@mui/icons-material/School'
import CheckIcon from '@mui/icons-material/Check'
import ContentCourse from '../ContentCourse'
import { StyledMainCourse } from './styled'

function MainCourse({ detailCourse }) {
  console.log(detailCourse)
  return (
    <StyledMainCourse>
      <h4 className="titledetail__title">
        {detailCourse.tenKhoaHoc}
      </h4>
      <div className="row detailcourse__head">
        <div className="col-lg-4">
          <div className="coursehead__intro">
            <div>
              <img className="coursehead__intro__img" src={INSTRUTOR} alt="" />
            </div>
            <div className="coursehead__intro__title">
              <p>Giảng viên</p>
              <p>{detailCourse.nguoiTao.hoTen}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="coursehead__intro">
            <div>
              <SchoolIcon className="coursehead__intro__icon" />
            </div>
            <div className="coursehead__intro__title">
              <p>Lĩnh vực</p>
              <p>{detailCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="coursehead__intro">
            <div className="reviewDetail">
              <span>
                <Rating className="reviewDetail__rating" name="read-only" value={5} readOnly />
              </span>
              <p>100 đánh giá</p>
            </div>
          </div>
        </div>
      </div>

      <div className="detailcourse__decs">
        <p>
          {detailCourse.moTa}
        </p>
      </div>

      <div className="boxcourse__learn">
        <h5>Những gì bạn sẽ học</h5>
        <div className="row">
          <div className="col-6">
            <ul>
              <li className="boxcourse__learn__li">
                <span>
                  <CheckIcon className="boxcourse__learn__li__icon" />
                  Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với người dùng và phản ứng nhanh
                </span>
              </li>
              <li>
                <i className="fas fa-check" />
                <p>
                  Đăng ký công việc được trả lương cao hoặc làm freelancer trong một trong những lĩnh
                  vực được yêu cầu nhiều nhất mà bạn có thể tìm thấy trong web dev ngay bây giờ
                </p>
              </li>
              <li>
                <i className="fas fa-check" />
                <p>Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức mạnh của JavaScript một cách dễ dàng</p>
              </li>
              <li>
                <i className="fas fa-check" />
                <p>Tìm hiểu tất cả về React Hooks và React Components</p>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <i className="fas fa-check" />
                <p>Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp Javascript NPM, Webpack, Babel và ES6 / ES2015</p>
              </li>
              <li>
                <i className="fas fa-check" />
                <p>Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp</p>
              </li>
              <li>
                <i className="fas fa-check" />
                <p>
                  Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người,
                  bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                </p>
              </li>
              <li>
                <i className="fas fa-check" />
                <p>Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng Redux</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ContentCourse />
    </StyledMainCourse>
  )
}

export default MainCourse
