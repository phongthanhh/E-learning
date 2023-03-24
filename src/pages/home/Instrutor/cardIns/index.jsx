import { Rating } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { StyledCardIns } from './styled'

function CardIns({ data }) {
  const { themeMode } = useSelector((state) => state.themeReducer)
  console.log(themeMode)
  return (
    <StyledCardIns>
      <div className={themeMode === 'dark' ? 'instructor__item__content dark ' : 'instructor__item__content'}>
        <img src={data.img} alt="" />
        <h6>{data.name}</h6>
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
