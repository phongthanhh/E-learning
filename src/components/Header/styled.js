import { SEARCHICON } from 'assets'
import styled from 'styled-components'
import { COLORS } from 'themes'

export const StyleHeader = styled.div`
  z-index: 999;
  position: relative;
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  .header__left{
    display: flex;
    align-items: center;
    &__img{
      width:250px
    }
    .searchForm{
      outline: none;
      border: none;
      width: 100%;
      height: 40px;
      border-radius: 8px;
      padding-left: 10px;
      margin-left: 15px;
      background-image: url(${SEARCHICON});
      background-size: 30px;
      background-position: 100%;
      background-repeat: no-repeat;
      background-color: #f5f5f5;
    }
  }
  .header__right{
    &__menu{
      display: flex;
      align-items: center;
      padding: 0 8px;
      justify-content: space-between;
      margin-bottom: 0;
      li{
        padding: 0 10px;
        transition: all .3s;
        a{
          font-size: 15px;
          font-weight: 600;
          color: ${COLORS.text};
          text-transform: uppercase;
          transition: all .3s;
        }
        &:hover{
          color: ${COLORS.global};
        }
        &:hover .menu__name{
          color: ${COLORS.global};
        }
      }
      .courseCate{
        display: flex;
        align-items: center;
        gap:0.25em;
        position: relative;
        .courseCateList{
          position: absolute;
          padding: 0;
          top: 32px;
          left: 0;
          z-index: 999;
          overflow: hidden;
          max-height: 0;
          background-color: rgba(1,135,126,.5) ;
          transition: all .5s linear;
          min-width: 200px ;
          transition: all .5s;
          li{
            padding: 10px;
            a{
              transition: all .5s;
            }
            &:hover a{
              color: #fff;
            }
          }
        }
        &:hover .courseCateList{
          max-height: 500px;
        }
      }
    }
  }
`
