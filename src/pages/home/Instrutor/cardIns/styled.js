import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledCardIns = styled.div`
    .instructor__item__content{
      display: flex;
      height: 228px;
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
    .dark{
      &:hover{
      box-shadow: ${COLORS.darkModeBoxShadowCard}
     }
    }
`
