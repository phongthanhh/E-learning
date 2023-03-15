import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledInfo = styled.div`
  padding: 40px;
  .info{
    padding: 20px;
    min-height: 500px;
    background-color: ${COLORS.white};
    box-shadow: ${COLORS.boxShadowCard};
    border-radius: 10px;
    padding: 20px;
    &__title{
        font-weight: 600;
        font-size: 18px;
        text-align: center;
      }
    &__item{
      border-bottom:solid 1px ${COLORS.bodergrey};
      color: ${COLORS.lightgrey};
      padding: 10px 15px;
      strong{
        font-weight: 300;
        color: ${COLORS.textCard};
      }
    }
    &__img{
      padding: 10px 0;
      text-align: center;
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
`
