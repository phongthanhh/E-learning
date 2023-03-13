import { post } from './baseService'

export const signUpService = (data) => post('api/QuanLyNguoiDung/DangKy', data)
