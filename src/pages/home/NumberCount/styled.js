import { COLORS } from 'constant'
import styled from 'styled-components'

export const StyledNumber = styled.div`
  padding: 50px;
  background: ${COLORS.bg};
  .boxnumber{
    width: 100%;
    text-align: center;
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
