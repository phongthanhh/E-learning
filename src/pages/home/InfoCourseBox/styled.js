import { ASTRONAUT } from 'assets'
import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledInfoBox = styled.div`
  padding: 50px 0;
  .info__container{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  color: ${COLORS.white};
  grid-gap: 20px;
  gap: 20px;
  .info__item{
    position: relative;
    overflow: hidden;
    padding: 20px;
    &__content{
      ul{
        li{
          padding: 5px;
          .iconItem{
            margin-right: 10px;
            vertical-align:0
          }
        }
      }
      &::before{
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: -160%;
        width: 50%;
        height: 100%;
        z-index: 2;
        background: linear-gradient(90deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.3));
        transform: skewX(-17deg);
      }
    }
    &:hover {
      .info__item__content::before{
        left: 120%;
        transition: all .75s;
      }
    }
  }
  .info__item__large{
    grid-row: 1/span 2;
    background-color: ${COLORS.global};
    background-image: url(${ASTRONAUT});
    background-position: 100% 100%;
    background-size: 50%;
    background-repeat: no-repeat;
  }
  }
  @media (max-width: 1024px) {
    .info__container{
      grid-template-columns:none;
    }
  }
`
