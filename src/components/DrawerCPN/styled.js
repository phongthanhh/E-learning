import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledContent = styled.div`
  a{
    &:hover{
      color: unset;
    }
  }
  .user__name{
    color: ${COLORS.global};
  }
 .MuiListItemText-primary{
    font-size: 16px;
    font-weight: bold;
    &:hover{
      color: unset;
    }
  }
  .drawer__icon{
    color: ${COLORS.global};
  }
  .darkMode__btn{
    .MuiListItemText-primary{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .signOut__btn{
    border: 1px solid ${COLORS.global};
  }
`

export const StyledDrawer = styled.div`
  .drawer__toggle{
    color: ${COLORS.global};
  }
`
