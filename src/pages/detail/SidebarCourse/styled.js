import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
  padding: 10px 30px;
  box-shadow: ${COLORS.boxShadowSidebar};
  .btn__signUp{
    background: transparent;
    color: ${COLORS.global};
    border: 1px solid ${COLORS.global};
    transition: all .5s;
    &:hover{
      color: ${COLORS.white};
      background: ${COLORS.global};
    }
  }
  .sidebar__price{
    padding: 30px 0;
    text-align: right;
    p{
      font-weight: 500;
      font-size: 25px;
      .sidebar__price__icon{
        width: 1.2em;
        height: 1.2em;
        color: ${COLORS.primary};
      }
    }
  }
  .sidebar__detail{
    ul{
      li{
        display: flex;
        align-items: center;
        padding: 20px 0;
        justify-content: space-between;
        border-bottom: 1px solid ${COLORS.bodergrey};
        p{
          color: ${COLORS.textCard};
          span{
            color: ${COLORS.text};
            font-weight: 500;
          }
        }
        .sidebar__detail__icon{
          color: ${COLORS.primary};
        }
      }
    }
    .sidebar__discount{
      padding: 20px 0;
      input{
        width: 100%;
      }
    }
  }
`
