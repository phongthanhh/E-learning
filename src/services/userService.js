import axiosClient from './baseService'

export const signUpService = (data) => axiosClient.post('api/QuanLyNguoiDung/DangKy', data)

export const loginService = (data) => axiosClient.post('api/QuanLyNguoiDung/DangNhap', data)

export const getInfoUserService = () => axiosClient.post('api/QuanLyNguoiDung/ThongTinTaiKhoan')

export const updateInfoUserService = (data) => axiosClient.put('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data)
