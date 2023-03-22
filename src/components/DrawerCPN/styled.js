import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledDrawer = styled.div`
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
 .uldrawr{
  padding: 20px !important;
 }
 .drawer__toggle{
  color: ${COLORS.global};
 }

.darkmod__btn{
  .MuiListItemText-primary{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

`
