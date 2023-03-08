import {
  CLOUNDS, CODE_SLIDER, MESSAGE_SLIDER, PAPER_PLANE, SLIDER2
} from 'assets'
import React from 'react'
import InfoCourseBox from './InfoCourseBox'
import Instrutor from './Instrutor'
import NumberCount from './NumberCount'
import { StyledHome } from './styled'

function Home() {
  return (
    <div>
      <StyledHome>
        <div className="row homeSlider">
          <div className="col-lg-6 homeSlider__slogan">
            <div className="slogan__container">
              <div>
                <img className="sliderPlaneImg" src={PAPER_PLANE} alt="" />
              </div>
              <h1>Chào mừng</h1>
              <h1>đến với môi trường </h1>
              <h1>
                V
                <span>learning</span>
              </h1>
              <button style={{ padding: '10px 20px' }} type="button" className="btn__global">Bắt đâu nào</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="homeSlider__right">
              <div>
                <img src={SLIDER2} className="slider__mainImg" alt="" />
                <img src={CODE_SLIDER} className="slider__subImg slider__codeImg" alt="" />
                <img src={MESSAGE_SLIDER} className="slider__subImg slider__messImg" alt="" />
                <img src={CLOUNDS} className="slider__subImg slider__cloundImg" alt="" />
                <img src={CLOUNDS} className="slider__subImg slider__cloundImg2" alt="" />
                <img src={CLOUNDS} className="slider__subImg slider__cloundImg3" alt="" />
              </div>
            </div>
          </div>
        </div>
        <InfoCourseBox />
      </StyledHome>
      <NumberCount />
      <Instrutor />
    </div>
  )
}

export default Home
