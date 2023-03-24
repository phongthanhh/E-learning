import { REPONSIVE } from 'constant'
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
  padding: 10px 20px;
  .header__left{
    display: flex;
    align-items: center;
    gap: 10px;
    &__img{
      width:250px;
      @media (max-width: ${REPONSIVE.MOBILE}) {
        width:200px;
      }
    }
    &__search{
      @media (max-width: ${REPONSIVE.LARGE_TABLET}) {
      display: none;
      }
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
    @media (max-width: ${REPONSIVE.LARGE_TABLET}) {
      display: none;
    }
  }
  .header__showIcon{
    .user__info{
      display: flex;
      align-items: center;
      .user__logged{
      display: flex;
      align-items: center;
      &__img{
        position: relative;
        width: 55px;
        height: 55px;
        background: #ebebec;
        border-radius: 50%;
        cursor: pointer;
        position: relative;
        .MuiAvatar-root{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 45px;
          height: 45px;
        }
      }
      &__name{
        padding-left: 10px;
        color: ${COLORS.global};
      }
    }
    .dropdown{
      &__select{
        background: ${COLORS.bgButtonSL};
        margin-left: 10px;
        border-radius: 5px;
        cursor: pointer;
        &__icon{
          width: 1.2em;
          height: 1.2em;
          color: ${COLORS.global};
          transition: all .3s linear;
        }
      }
      &__list{
        width: 200px;
        position: absolute;
        right: 0;
        top:45px;
        border-radius: 4px;
        padding: 10px 5px;
        font-size: 14px;
        font-weight: 600;
        background: ${COLORS.white};
        border: 1px solid ${COLORS.global};
        li{
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 4px;
          padding: 8px 6px;
          list-style: none;
          cursor: pointer;
          span{
            .dropdown__list__icon{
              width: .9em;
              height: .9em;
              color: ${COLORS.global};
              transition: all .5s;
              margin-right: 5px;
              vertical-align: -4px;
            }
          }
          &:hover{
            .dropdown__list__icon{
            transform: scale(1.2);
            }
          }
        }
      }
    }
  
    }
    @media (max-width: ${REPONSIVE.LARGE_TABLET}) {
      display: none;
    }
  }

  .themeDark{
    .user__info{
      .dropdown__list{
        background: ${COLORS.darkModePaper};
      }
    }
  }

  .header__drawer{
    display: none;
    @media (max-width: ${REPONSIVE.LARGE_TABLET}) {
      display: block;
    }
  }
 
`
