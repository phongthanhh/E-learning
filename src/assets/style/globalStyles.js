import { COLORS } from 'constant'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
.btn__global{
    padding: 5px 10px;
    background-color: ${COLORS.primary};
    border: none;
    transition: all .5s;
    text-transform: uppercase;
    color: ${COLORS.white};
    font-size: 15px;
    cursor: pointer;
}
`
