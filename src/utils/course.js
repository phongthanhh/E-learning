import { convertNumberToVND } from './number'

export const getFeeOfCourse = (fee, feeType) => {
  const result = fee * feeType
  return convertNumberToVND(result)
}

export const getFeeOfCourseDefault = (fee, feeType) => {
  const result = fee * feeType
  return result
}
