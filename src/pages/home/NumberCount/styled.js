import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledNumber = styled.div`
  padding: 50px;
  background: ${COLORS.bg};
  .boxnumber{
    width: 100%;
    text-align: center;
    &__img{
      width: 80px;
      height: 80px;
    }
    &__number{
      font-size: 50px;
      color: ${COLORS.global};
      font-weight: bold;
    }
    &__title{
      font-weight: 600;
    }
  }
`
