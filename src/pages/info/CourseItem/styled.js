import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledCourse = styled.div`
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid ${COLORS.borderLightGrey};
  min-height: 180px;
  .row{
    width: 100%;
    min-height: 180px;
  }
  .course__img{
    &__img{
      transition: all 0.5s ease 0s;
      &:hover{
        transform: scale(1.1);
      }
    }
  }
  .course__content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__head{
      &__decs{
      color: ${COLORS.textCard};
    }
    }
    &__body{
      &__name{
        display: flex;
        align-items: center;
        .ant-image-img{
          border-radius: 50%;
        }
      }
      &__icon{
        .icon__title{
          padding-right: 15px;
          &__icon{
          width: .8em;
          height: .8em;
          color: ${COLORS.primary};
          margin-right: 5px;
          }
          .icon2{
            color: ${COLORS.lightRed};
          }
          .icon3{
            color: ${COLORS.lightBlue};
          }
        }
      }
      .iconStarNet{
        .MuiRating-root{
          span{
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .course__cancel{
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`
