import React from 'react'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import { StyledContentCourse } from './styled'

function ContentCourse() {
  return (
    <StyledContentCourse>
      <h5>Nội dung khóa học</h5>
      <div className="courseitem">
        <div className="courseitem__content">
          <div className="section__course">
            <span className="section__course__title">Mục 1: Giới thiệu</span>
            <button className="btn__global btn__preview" type="button">Xem trước</button>
          </div>
          <p className="courseitem__content__lesson">Bài học</p>
          <div className="lesson">
            <div className="lesson__content">
              <span className="lesson__content__title">
                <PlayCircleIcon className="lesson__content__title__icon" />
                Các khái niệm về React Component
              </span>
              <span className="lesson__content__time">
                <WatchLaterIcon className="lesson__content__time__icon" />
                14:35
              </span>
            </div>
          </div>
        </div>
      </div>
    </StyledContentCourse>
  )
}

export default ContentCourse
