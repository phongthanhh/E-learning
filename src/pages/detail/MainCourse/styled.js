import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledMainCourse = styled.div`
  .detailcourse__head{
    padding: 30px 0;
    .coursehead__intro{
      display: flex;
      padding: 5px;
      align-items: center;
      &__img{
        height: 50px;
        width: 50px;
        object-fit: cover;
        border-radius: 50%;
      }
      &__title{
        padding: 0 5px;
        p:first-of-type{
          font-size: 14px;
           color: ${COLORS.textCard}
        }
      }
      &__icon{
        width: 2em;
        height: 2em;
        color: ${COLORS.global};
      }
      .reviewDetail{
        text-align: right;
        &__rating{
          font-size: 1.4em;
        }
        p{
          font-size: 14px;
           color: ${COLORS.textCard}
        }
      }
    }
  }
  .detailcourse__decs{
    p{
      color: ${COLORS.textCard};
      padding-bottom: 20px;
      border-bottom: 1px solid ${COLORS.borderGray};
      text-align: justify;
    }
  }
  .boxcourse__learn{
    padding: 20px 0;
    h5{
      padding: 10px 0;
    }
    &__li{
      padding: 5px 0;
      text-align: justify;
      &__icon{
        vertical-align: -4px;
        color: ${COLORS.primary};
      }
    }
  }
`
