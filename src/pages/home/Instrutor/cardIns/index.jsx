import { Rating } from '@mui/material'
import React from 'react'
import { StyledCardIns } from './styled'

function CardIns({ data }) {
  return (
    <StyledCardIns>
      <div className="intstructor__item__content">
        <img src={data.img} alt="" />
        <h6 style={{ fontWeight: '600' }}>{data.name}</h6>
        <div className="textReviewRole">
          <p>{data.textReview}</p>
        </div>
        <p className="reviewMentor">
          <Rating name="read-only" value={5} readOnly />
        </p>
        <span className="textReviewBot">100 Đánh giá</span>
      </div>
    </StyledCardIns>
  )
}

export default CardIns
