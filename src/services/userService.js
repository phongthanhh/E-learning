import { post } from './baseService'

export const signUpService = (data) => post('api/QuanLyNguoiDung/DangKy', data)

export const loginService = (data) => post('api/QuanLyNguoiDung/DangNhap', data)
