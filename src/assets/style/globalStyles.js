import { createGlobalStyle } from 'styled-components'
import { COLORS, FONT_SIZE } from 'themes'

export const GlobalStyles = createGlobalStyle`
.triangleTopRight{
  transform: rotate(-45deg);
  position: absolute;
  top: 5%;
  left: 10%;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 50px solid ${COLORS.primary};
}
.smallBox{
  position: absolute;
  z-index: 1;
  height: 10%;
  width: 10%;
  background-image: radial-gradient(${COLORS.global} 10%,transparent 11%),radial-gradient(${COLORS.global} 10%,transparent 11%);
  background-size: 10px 10px
}

.btn__global{
  padding: 5px 10px;
  background-color: ${COLORS.primary};
  border: none;
  transition: all .5s;
  text-transform: uppercase;
  color: ${COLORS.white};
  font-size: 15px;
  cursor: pointer;
  &:hover{
    transform:scale(.97);
  }
}
.titleCourse{
  padding: 50px;
  text-transform: uppercase;
  background-color: ${COLORS.lightYellow};
  color: ${COLORS.white};
}
a{
  text-decoration: none !important;
  color: ${COLORS.text};
}
body{
  color: ${COLORS.text};
  @media (max-width: 768px) {
    font-size: ${FONT_SIZE.sub};
  }
}
`
