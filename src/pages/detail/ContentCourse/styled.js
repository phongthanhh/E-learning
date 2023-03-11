import styled from 'styled-components'
import { COLORS, FONT_SIZE } from 'themes'

export const StyledContentCourse = styled.div`
  h5{
    font-weight: 600;
    padding-bottom: 20px
  }
  .courseitem{
    &__content{
      padding: 20px 0;
      .section__course{
        justify-content: space-between;
        display: flex;
        align-items: center;
        padding: 10px;
        margin-bottom: 20px;
        background-color: ${COLORS.bgCourseDetail};
        &__title{
          text-transform: uppercase;
          font-size: 22px;
          font-weight: 400;
        }
        .btn__preview{
          padding: 5px;
          background-color: transparent;
          border: 1px solid ${COLORS.global};
          font-weight: 500;
          text-transform: uppercase;
          color: ${COLORS.global};
          transition: all .5s;
          &:hover{
          background-color: ${COLORS.global};
          color: ${COLORS.white};
          }
        }
      }
      &__lesson{
        padding: 0 10px;
      }
      .lesson{
        &__content{
          display: flex;
          padding: 10px;
          justify-content: space-between;
          align-items: center;
          box-shadow: 1px 1px 2px 1px rgb(239 244 190 / 27%);
          &__title{
            display: flex;
            align-items: center;
            color: ${COLORS.textCard};
            &__icon{
              width: .8em;
              height: .8em;
              color: ${COLORS.global};
              margin-right: 10px;
            }
          }
          &__time{
            display: flex;
            align-items: center;
            color: ${COLORS.textCard};
            &__icon{
              width: .8em;
              height: .8em;
              color: ${COLORS.global};
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .courseitem{
      &__content{
        .section__course{
          &__title{
            font-size: ${FONT_SIZE.sublg};
          }
          .btn__preview{
            font-size: ${FONT_SIZE.subsm};
          }
        }
      }
    }
  }
`
