import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledSwitchButton = styled.div`
  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .label {
    width: 35px;
      height: 15px;
    background-color:${COLORS.white2};
    display: flex;
    border-radius:50px;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    transform: scale(1.5);
    cursor: pointer;
    margin: 0;
  }

  .ball {
    width: 15px;
    height: 15px;
    background-color: ${COLORS.global};
    position: absolute;
    top:0;
    left: 1px;
    border-radius: 50%;
    transition: transform 0.3s linear;
  }

  .checkbox:checked + .label .ball{
    transform: translateX(18px);
  }

  .moon {
    color: ${COLORS.lightgrey};
    width: .5em;
    height: .5em;
  }

  .sun {
    color: ${COLORS.lightgrey};
    width: .5em;
    height: .5em;
  }
`
