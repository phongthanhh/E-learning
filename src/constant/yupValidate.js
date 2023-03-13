/* eslint-disable no-useless-escape */
export const VALIDATE = {
  MIN_CHAR: 6,
  MAX_CHAR: 15,
  PHONE_REGEX: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
  EMAIL_REGEX: /^\S+@\S+\.\S+$/,
  PASSWORD_REGEX: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

}
