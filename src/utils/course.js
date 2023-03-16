import { convertNumberToVND } from './number'

export const getFeeOfCourse = (fee, feeType) => {
  const result = fee * feeType
  return convertNumberToVND(result)
}
