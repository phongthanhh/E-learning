import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledCourse = styled.div`
  .coursesContainer{
    padding: 50px;
    .courses__boxItem{
      padding: 0;
      .courses__box{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: ${COLORS.white};
        text-transform: uppercase;
        height: 100%;
        padding: 30px 20px;
        text-align: center;
        h6{
          padding-bottom: 10px;
        }
        &__icon{
          width: 1.9em;
          height: 1.9em;
          padding-bottom: 10px;
        }
      }
      .bgStyle1{
        background: #264653
      }
      .bgStyle2 {
      background: #2a9d8f;
      }
      .bgStyle3 {
      background: #e9c46a;
      }
      .bgStyle4 {
      background: #f4a261;
      }
      .bgStyle5 {
      background: #ee8959;
      }
      .bgStyle6 {
      background: #e76f51;
      }
    }
  }
  .courseListPage{
    padding:50px;
    &__content{
      &__item{
        display: flex;
        justify-content: center;
      }
    }
  }
  .paginationPage{
    display: flex;
    justify-content: center;
    padding-left: 0;
    border-radius: 0.25rem;
    margin-bottom: 10px;
  }
`
