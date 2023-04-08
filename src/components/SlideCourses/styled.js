import { NEXT_ICON, PREV_ICON } from 'assets'
import { REPONSIVE } from 'constant'
import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledSwiper = styled.div`
  .swiper{
    padding: 40px 0 50px;
    .swiper-slide{
      display: flex !important;
      justify-content: center !important;
    }
    .swiper-button-prev{
      cursor: pointer;
      position:absolute;
      left: 0;
      bottom: 50%;
      width: 50px;
      height: 50px;
      background: ${COLORS.whitedark};
      border-radius: 50%;
      z-index: 2;
      transform: translateY(50%);
      transition: all .5s;
      &::before{
        position: absolute;
        content: "";
        width: 50%;
        height: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url(${PREV_ICON}) 50%/contain no-repeat;
      }
      &:hover{
        background: ${COLORS.white2};
      }
      @media (max-width: ${REPONSIVE.MOBILE}) {
       display:none
      }
    }
    .swiper-button-next{
      cursor: pointer;
      position:absolute;
      right: 0;
      bottom: 50%;
      width: 50px;
      height: 50px;
      background: ${COLORS.whitedark};
      border-radius: 50%;
      z-index: 2;
      transform: translateY(50%);
      transition: all .5s;
      &::before{
        position: absolute;
        content: "";
        width: 50%;
        height: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url(${NEXT_ICON}) 50%/contain no-repeat;
      }
      &:hover{
        background: ${COLORS.white2};
      }
      @media (max-width: ${REPONSIVE.MOBILE}) {
       display:none
      }
    }
  }
`
