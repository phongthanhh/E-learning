import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledInfo = styled.div`
  padding: 40px;
  h5{
    font-size: 18px;
    text-align: center;
  }
  .info{
    padding: 20px;
    height: 500px;
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
    &__btn{
      text-align: center;
      padding: 10px 0;
    }
    &__img{
      padding: 10px 0;
      padding-bottom: 0;
      text-align: center;
      img{
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }

  .course{
    padding: 20px;
    height: 500px;
    background-color: ${COLORS.white};
    box-shadow: ${COLORS.boxShadowCard};
    border-radius: 10px;
    .course__head{
      h5{
        padding-bottom: 1em;
      }
    }
    .course__body{
      padding: 0 10px 10px;
      height: 400px;
      overflow-y: auto;
    }
  }
  @media (max-width: 576px) {
    padding: 10px;
    .course{
      padding: 10px;
    }
  }
`
