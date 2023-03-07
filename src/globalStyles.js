import { COLORS } from 'constant'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body{
  color: ${COLORS.colorText};
}
.btn__global{
    padding: 5px 10px;
    background-color: ${COLORS.colorPrimary};
    border: none;
    transition: all .5s;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
}
`
