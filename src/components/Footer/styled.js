import { COLORS } from 'constant'
import styled from 'styled-components'

export const StyledFooter = styled.div`
  padding: 10px;
  background-color: ${COLORS.bg};
  .footerbody{
    padding: 10px 40px;
    .textLogo{
      color: ${COLORS.text};
      font-family: "fontPoppin";
      display: inline-block;
      position: relative;
      font-size: 20px;
      transition: all .3s;
      text-shadow: 5px -2px 3px #54d2c0;
      font-weight: bold;
      .textE{
        font-size: 40px;
        color: ${COLORS.global};
      }
      .icon__logo{  
        right: 0px;
        top: 13px;
        position: absolute;
      }
    }
    .menuFooter{
      li{
        font-weight: bold;
        padding: 5px 0;
        transition: all .5s;
        a{
          color: ${COLORS.text};
          display: flex;
          align-items: center;
          transition: all .5s;
        }
      }
    }
    .formFooter{
      margin: 3px 0;
      outline: none;
      border: none;
      width: 300px;
      max-width: 100%;
      height: 40px;
      border: 2px solid ${COLORS.global};
      border-radius: 8px;
      padding-left: 10px;
      background-color: ${COLORS.bgForm};
    }
    ul{
      li{
        &:hover{
          transform: translateY(-2px);
          color: #01877e;
          a{
          color: #01877e;
          }
        }
      }
    }
  }
  .menuFooter__icon{
    display: inline-block;
    margin: 0 10px;
    width: 40px;
    height: 40px;
    color: #fff;
    background: ${COLORS.global};
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
    transition: all .5s;
  }
  .extrafooter{
    display: flex;
    justify-content: space-between;
    padding: 5px 50px;
    border-top: 1px solid #d0d0d0;
    .iconSize{
      width: 30px;
      height: 30px;
      line-height: 30px;
      margin: 0 5px;
      transition: all .3s linear;
      span{
        vertical-align:0
      }
    }
  }

`
