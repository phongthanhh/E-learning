import React from 'react'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import { CONTENT__COURSE__DATA } from 'data'
import { StyledContentCourse } from './styled'

function ContentCourse() {
  const renderCourseContent = () => CONTENT__COURSE__DATA.map((course) => (
    <div className="courseitem" key={course.id}>
      <div className="courseitem__content">
        <div className="section__course">
          <span className="section__course__title">{course.title}</span>
          <button className="btn__global btn__preview" type="button">Xem trước</button>
        </div>
        <p className="courseitem__content__lesson">Bài học</p>
        <div className="lesson">
          {course.lesson.map((item) => (
            <div className="lesson__content" key={item.id}>
              <span className="lesson__content__title">
                <PlayCircleIcon className="lesson__content__title__icon" />
                {item.lessonTitle}
              </span>
              <span className="lesson__content__time">
                <WatchLaterIcon className="lesson__content__time__icon" />
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))

  return (
    <StyledContentCourse>
      <h5>Nội dung khóa học</h5>
      {renderCourseContent()}
    </StyledContentCourse>
  )
}

export default ContentCourse
