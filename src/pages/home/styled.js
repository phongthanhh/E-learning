import styled, { keyframes } from 'styled-components'

const aniCode = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-5%);
  }50% {
    opacity: 1;
    transform: translateY(-10%);
  }100% {
    opacity: 0;
    transform: translateY(-15%);
  }
`
const aniMessage = keyframes`
  0% {
    transform: rotate(0deg);
  }25%{
    transform: rotate(30deg);
  }50% {
    transform: rotate(0deg);
  }75%{
    transform: rotate(-30deg);
  }100% {
    transform: rotate(0deg);
  }
`
const aniCloud = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }100% {
    opacity: 0;
    transform: translateX(100%);
  }
`

export const StyledHome = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 50px;
  .homeSlider{
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    @media (max-width: 1024px) {
      flex-direction: column-reverse;
  }
    &__slogan{
      display: flex;
      position: relative;
      z-index: 10;
      justify-content: center;
      align-items: center;
      .slogan__container{
        .sliderPlaneImg{
          position: absolute;
          object-fit: cover;
          right: 20%;
          top: 20%;
          width: 20%;
          height: 20%;
        }
      }
    }
    &__right{
      position: relative;
      .slider__mainImg{
        width: 100%;
      }
      .slider__subImg {
        position: absolute;
        width: 15%;
        height: 15%;
      }
      .slider__codeImg{
        left: 20%;
        top: 50%;
        animation: ${aniCode} 4s infinite;
      }
      .slider__messImg{
        top: 42%;
        right: 45%;
        transform-origin: bottom;
        animation: ${aniMessage} 4s linear 3s infinite;
      }
      .slider__cloundImg{
        top: 0;
        left: 0;
        animation: ${aniCloud} 5s linear infinite;
      }
      .slider__cloundImg2{
        top: 15%;
        left: 25%;
        animation: ${aniCloud} 5s linear 2s infinite;
      }
      .slider__cloundImg3{
        top: 30%;
        left: 20%;
        animation: ${aniCloud} 7s linear 2s infinite;
      }
    }
  }
`
