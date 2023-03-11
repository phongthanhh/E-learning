/* eslint-disable no-irregular-whitespace */
import { Rating } from '@mui/material'
import { INSTRUTOR } from 'assets'
import React, { memo } from 'react'
import SchoolIcon from '@mui/icons-material/School'
import CheckIcon from '@mui/icons-material/Check'
import { COURSE__LEARN__DATA } from 'data'
import ContentCourse from '../ContentCourse'
import { StyledMainCourse } from './styled'

function MainCourse({ detailCourse }) {
  const renderCourseLearn = () => COURSE__LEARN__DATA.map((course) => (
    <div className="col-6">
      <ul>
        {course.listCourse.map((item) => (
          <li className="boxcourse__learn__li">
            <span>
              <CheckIcon className="boxcourse__learn__li__icon" />
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  ))

  return (
    <StyledMainCourse>
      <h4 className="titledetail__title">
        {detailCourse !== null ? detailCourse.tenKhoaHoc : ''}
      </h4>
      <div className="row detailcourse__head">
        <div className="col-lg-4">
          <div className="coursehead__intro">
            <div>
              <img className="coursehead__intro__img" src={INSTRUTOR} alt="" />
            </div>
            <div className="coursehead__intro__title">
              <p>Giảng viên</p>
              <p>{detailCourse !== null ? detailCourse.nguoiTao.hoTen : ''}</p>
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
              <p>{detailCourse !== null ? detailCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc : ''}</p>
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
          {detailCourse !== null ? detailCourse.moTa : ''}
        </p>
      </div>

      <div className="boxcourse__learn">
        <h5>Những gì bạn sẽ học</h5>
        <div className="row">
          {renderCourseLearn()}
        </div>
      </div>
      <ContentCourse />
    </StyledMainCourse>
  )
}

export default memo(MainCourse)
