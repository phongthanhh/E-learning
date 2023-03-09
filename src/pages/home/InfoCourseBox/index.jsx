import { CheckOutlined } from '@ant-design/icons'
import { DATA__INFOBOX } from 'data'
import React from 'react'
import { COLORS } from 'themes'
import { StyledInfoBox } from './styled'

function InfoCourseBox() {
  return (
    <StyledInfoBox>
      <div className="info__container">
        <div className="info__item info__item__large">
          <div className="info__item__content">
            <h3>{DATA__INFOBOX.course.title}</h3>
            <p>
              <span>Học qua dự án thực tế</span>
              , học đi đôi với hành,
              không lý thuyết lan man, phân tích cội nguồn của vấn đề,
              xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài
              thực tế để học viên học xong làm được ngay
            </p>
            <ul>
              {DATA__INFOBOX.course.item.map((item) => (
                <li key={item}>
                  <CheckOutlined className="iconItem" />
                  <span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="info__item" style={{ backgroundColor: `${COLORS.primary}` }}>
          <div className="info__item__content">
            <h3>{DATA__INFOBOX.suitableRoute.title}</h3>
            <ul>
              {DATA__INFOBOX.suitableRoute.item.map((item) => (
                <li key={item}>
                  <CheckOutlined className="iconItem" />
                  <span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="info__item" style={{ backgroundColor: `${COLORS.bgbox2}` }}>
          <div className="info__item__content">
            <h3>{DATA__INFOBOX.learningSystem.title}</h3>
            <ul>
              {DATA__INFOBOX.learningSystem.item.map((item) => (
                <li key={item}>
                  <CheckOutlined className="iconItem" />
                  <span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="info__item" style={{ backgroundColor: `${COLORS.primary}` }}>
          <div className="info__item__content">
            <h3>{DATA__INFOBOX.lecturers.title}</h3>
            <ul>
              {DATA__INFOBOX.lecturers.item.map((item) => (
                <li key={item}>
                  <CheckOutlined className="iconItem" />
                  <span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="info__item" style={{ backgroundColor: `${COLORS.bgbox}` }}>
          <div className="info__item__content">
            <h3>{DATA__INFOBOX.cert.title}</h3>
            <ul>
              {DATA__INFOBOX.cert.item.map((item) => (
                <li key={item}>
                  <CheckOutlined className="iconItem" />
                  <span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StyledInfoBox>
  )
}

export default InfoCourseBox
