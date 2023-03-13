import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledCategory = styled.div`
  .listCourseCate{
    padding: 50px;
    &__name{
      &__button{
        display: inline-block;
        border-radius: 25px;
        padding: 12px 10px;
        cursor: default;
        border: 2px solid ${COLORS.borderLightGrey};
        outline: none;
        transition: .5s linear;
        font-weight: 600;
        background: transparent;
        &:hover{
          transform: scale(.96);
        }
      }
    }
    &__content{
      &__item{
        display: flex;
        justify-content: center;
      }
    }
  }
`
