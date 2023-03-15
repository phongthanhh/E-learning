import styled from 'styled-components'
import { COLORS, FONT_SIZE } from 'themes'

export const StyledContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  width: 280px;
  min-width: 280px;
  min-height: 370px;
  word-wrap: break-word;
  background-color: ${COLORS.white};
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 0 10px 4px rgb(0 0 0 / 20%);
  .card__img {
    width: 100%;
    height: 185px;
    min-height: 185px;
    transition: all 0.5s;
  }
  .card__sticker {
    display: inline-block;
    position: absolute;
    z-index: 10;
    top: 174px;
    padding: 0 10px;
    color: ${COLORS.white};
    background-color: ${COLORS.global};
  }
  .card__body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__title {
      padding-bottom: 10px;
      font-size: ${FONT_SIZE.md};
    }
  }
  .card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    .card__footer__title {
      display: flex;
      align-items: center;
      .footer__img {
        height: 40px;
        width: 40px;
        padding: 2px;
        border-color: ${COLORS.primary} transparent;
        border-left: 1px solid transparent;
        border-bottom: 1px solid ${COLORS.primary};
        border-right: 1px solid transparent;
        border-top: 1px solid ${COLORS.primary};
        border-radius: 50%;
      }
    }
  }
  .card__sale {
    position: absolute;
    top: 5px;
    left: -5px;
    width: 90px;
    height: 30px;
    padding: 5px 8px 4px;
    color: ${COLORS.white};
    background-color: red;
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      left: 0;
      bottom: -10px;
      border-bottom: 10px solid transparent;
      border-right: 5px solid red;
      filter: brightness(0.8);
    }
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      top: 0;
      right: -12px;
      border-color: red transparent;
      border-style: solid;
      border-width: 15px 12px 15px 0;
    }
  }
  .card__icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: ${COLORS.textCard};
      .card__icon__span {
        vertical-align: -3px;
        margin-right: 8px;
        width: 0.8em;
        height: 0.8em;
      }
    }
  }
  .color__card__title {
    color: ${COLORS.textCard};
  }
  .card__sub {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    z-index: 99;
    top: -10%;
    right: -132%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.5s;
    width: 350px;
    min-width: 280px;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 0 0 10px 4px rgb(0 0 0 / 10%);
    .sub__head {
      padding: 10px 0;
      &__img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .sub__button {
      .btn__SubCard {
        padding: 15px;
        background: ${COLORS.global};
        flex-basis: 77%;
      }
      &__cart {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 20%;
        border: 1px solid ${COLORS.global};
        transition: all 0.5s;
        cursor: pointer;
        &:hover {
          transform: scale(0.95);
          .sub__button__cart__icon {
            transform: scale(0.9);
          }
        }
        &__icon {
          width: 2em;
          height: 1.2em;
          transition: all 0.5s;
          color: ${COLORS.global};
        }
      }
    }
  }
  &:hover {
    .card__img {
      filter: brightness(70%);
    }
    .card__sub {
      visibility: visible;
      opacity: 1;
    }
  }
`

export const StyledTooltipCourse = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  word-wrap: break-word;
  background-clip: border-box;
  .sub__head {
    padding: 10px 0;
    &__img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .sub__button {
    .btn__SubCard {
      padding: 15px;
      background: ${COLORS.global};
      flex-basis: 77%;
    }
    &__cart {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-basis: 20%;
      border: 1px solid ${COLORS.global};
      transition: all 0.5s;
      cursor: pointer;
      &:hover {
        transform: scale(0.95);
        .sub__button__cart__icon {
          transform: scale(0.9);
        }
      }
      &__icon {
        width: 2em;
        height: 1.2em;
        transition: all 0.5s;
        color: ${COLORS.global};
      }
    }
  }
`
