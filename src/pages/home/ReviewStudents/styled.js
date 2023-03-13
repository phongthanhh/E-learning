import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledReview = styled.div`
  padding: 20px 50px;
  position: relative;
  .reviewStudent{
    position: relative;
    padding: 50px 0;
    .triangleTopRight{
      top: 0;
      left: 0;
    }
    .smallboxLeftTop{
      top: 0;
      left: 0;
      height: 70px;
      width: 10%;
    }
    .smallboxRightBottom{
      bottom: 0;
      right: 10%;
      height: 50px;
      background-image: radial-gradient(${COLORS.primary} 10%,transparent 11%);
    }
    .smallboxRightTop{
      top: 0;
      right: 40%;
      height: 50px;
      width: 80px;
      background-image: radial-gradient(${COLORS.global} 10%,transparent 11%);
    }
    .smallboxLeftBottom{
      border-radius: 50%;
      bottom: 0;
      left: 30%;
      height: 80px;
      width: 80px;
      background-image: radial-gradient(${COLORS.global} 10%,transparent 11%);
    }
    &__img{
      display: flex;
      position: relative;
      justify-content: center;
      height: 100%;
      align-items: center;
      &__bg{
        top: -10%;
        z-index: 1;
        height: 220px;
        width: 230px;
        position: absolute;
        border-radius: 10px 100px 110px;
        background: ${COLORS.bgReview};
      }
      img{
          width: 200px;
          height: 200px;
          position: relative;
          z-index: 10;
        }
    }
  }
`
