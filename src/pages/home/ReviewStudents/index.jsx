import { AVATAR_REVIEW } from 'assets'
import React from 'react'
import { COLORS } from 'themes'
import { StyledReview } from './styled'

function ReviewStudents() {
  return (
    <StyledReview className="mt-5">
      <div className="reviewStudent">
        <div className="triangleTopRight" />
        <div className="smallBox smallboxLeftTop" />
        <div className="smallBox smallboxRightTop" />
        <div className="smallBox smallboxRightBottom" />
        <div className="smallBox smallboxLeftBottom" />

        <div className="row">
          <div className="col-md-6">
            <div className="reviewStudent__img">
              <div className="reviewStudent__img__bg" />
              <img src={AVATAR_REVIEW} alt="" />
            </div>
          </div>
          <div className="col-md-6 p-2.5">
            <blockquote>
              Chương trình giảng dạy được biên soạn dành riêng cho các
              bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường
              độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi
              các thành viên sáng lập và giảng viên dày kinh
              nghiệm.Thực sự rất hay và hấp dẫn
            </blockquote>
            <p style={{ color: COLORS.bgReview }}>Nhi Dev</p>
            <span style={{ color: COLORS.textCard }}>Học viên xuất sắc</span>
          </div>
        </div>
      </div>
    </StyledReview>
  )
}

export default ReviewStudents
