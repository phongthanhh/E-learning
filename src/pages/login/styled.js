import { BG_LOGIN, BG_OVERLAY } from 'assets'
import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyledLogin = styled.div`
  background: url(${BG_LOGIN});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  .loginContainer{
    background: ${COLORS.white};
    border-radius: 10px;
    box-shadow: 0 14px 28px rgb(0 0 0 / 20%), 0 10px 10px rgb(0 0 0 / 20%);
    position: relative;
    overflow: hidden;
    width: 80vw;
    height: 83vh;
    max-width: 100%;
    max-height: 100%;
    &__form{
      position: absolute;
      top: 0;
      height: 100%;
      transition: all .6s ease-in-out;
      display: flex;
      align-items: center;
      form{
        background: ${COLORS.white};
        padding: 0 50px;
        text-align: center;
      }
    }
    .sign-up-container{
      left: 0;
      width: 50%;
      z-index: 2;
      opacity: 0;
    }
    .sign-in-container{
      left: 0;
      width: 50%;
      z-index: 2;
    }
  }
  .overlayContainer{
    position: absolute;
    height: 100%;
    top: 0;
    left: 50%;
    width: 50%;
    overflow: hidden;
    z-index: 100;
    transition: transform .6s ease-in-out;
    .overlay{
      background: url(${BG_OVERLAY});
      background-size: cover;
      color: ${COLORS.white};
      position: relative;
      height: 100%;
      width: 200%;
      left: -100%;
      transition: transform .6s ease-in-out;
      .overlay__panel{
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 40px;
        height: 100%;
        width: 50%;
        text-align: center;
        transition: transform .6s ease-in-out;
        &__text{
          font-size: 14px;
          font-weight: 100;
          line-height: 20px;
          letter-spacing: .5px;
          margin: 20px 0 30px;
        }
        &__btn{
          border-radius: 20px;
          border: 1px solid ${COLORS.white};
          background: ${COLORS.global} ;
          color:${COLORS.white};
          font-size: 12px;
          font-weight: 700;
          padding: 12px 45px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all .5s;
          &:hover{
            transform: scale(.95);
            background:#36867b ;
          }
        }
      }
      .overlay__left{
          transform: translateX(-20%);
          transition: transform .6s ease-in-out
      }
      .overlay__right {
          right: 0;
          transform: translateX(0);
          transition: transform .6s ease-in-out
      }
    }
  }
  .right__panel__active{
    .overlayContainer{
      transform: translateX(-100%);
      .overlay{
      transform: translateX(50%);
      .overlay__left{
        transform: translateX(0);
      }
      .overlay__right{
        transform: translateX(20%);
      }
    }
    }
    .sign-up-container{
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
    }
    .sign-in-container{
      transform: translateX(100%);
    }
  }
`
