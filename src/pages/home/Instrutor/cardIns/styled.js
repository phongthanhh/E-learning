import { COLORS } from 'constant'
import styled from 'styled-components'

export const StyledCardIns = styled.div`
    .intstructor__item__content{
      display: flex;
      height: 100%;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 15px;
      border-radius: 5px;
      border: none;
      transition: all .5s;
      img{
        height: 80px;
        width: 80px;
        object-fit: cover;
        border-radius: 50%;
      }
      .textReviewBot{
        font-size: 13px;
        color: ${COLORS.textCard};
      }
      &:hover{
      box-shadow: ${COLORS.boxShadowCard}
    }
    }
`
