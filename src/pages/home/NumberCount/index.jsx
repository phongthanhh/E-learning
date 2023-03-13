import {
  HOUR_GLASS, STUDENTS, TEACHER, TIMETABLE
} from 'assets'
import React from 'react'
import { StyledNumber } from './styled'

function NumberCount() {
  return (
    <StyledNumber className="mt-5">
      <div className="row">
        <div className="col-lg-3 col-md-6 p-4">
          <div className="boxnumber">
            <div>
              <img src={STUDENTS} alt="student" className="boxnumber__img" />
            </div>
            <div className="boxnumber__number">
              <span>9000</span>
            </div>
            <p className="boxnumber__title">Học viên</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 p-4">
          <div className="boxnumber">
            <div>
              <img src={TIMETABLE} alt="timetable" className="boxnumber__img" />
            </div>
            <div className="boxnumber__number">
              <span>1000</span>
            </div>

            <p className="boxnumber__title">Khóa học</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 p-4">
          <div className="boxnumber">
            <div>
              <img src={HOUR_GLASS} alt="hourglass" className="boxnumber__img" />
            </div>
            <div className="boxnumber__number">
              <span>33200</span>
            </div>
            <p className="boxnumber__title">Giờ học</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 p-4">
          <div className="boxnumber">
            <div>
              <img src={TEACHER} alt="teacher" className="boxnumber__img" />
            </div>
            <div className="boxnumber__number">
              <span>400</span>
            </div>
            <p className="boxnumber__title">Giảng viên</p>
          </div>
        </div>
      </div>
    </StyledNumber>
  )
}

export default NumberCount
