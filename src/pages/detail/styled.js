import styled from 'styled-components'
import { COLORS, FONT_SIZE } from 'themes'

export const StyledDetail = styled.div`
  .titleCourse{
    padding: 50px;
    text-transform: uppercase;
    background-color: ${COLORS.lightYellow};
    color: ${COLORS.white};
    p{
      font-size: ${FONT_SIZE.submd};
    }
  }
  .detailcontainer{
    padding: 50px;
  }
  .refer__course{
    padding: 20px 50px;
  }
  @media (max-width: 768px) {
    .detailcontainer{
      &__content{
      flex-direction: column-reverse;
      }
    } 
  }
`
