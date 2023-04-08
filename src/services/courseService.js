import { GROUP_ID } from 'constant'
import QueryString from 'query-string'
import axiosClient from './baseService'

export const getCategoryService = () => axiosClient.get('api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')

export const getCoursesService = ({ queries = {} }) => {
  const q = { maNhom: GROUP_ID, ...queries }
  return axiosClient.get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?${QueryString.stringify(q)}`)
}

export const cancelRegistrationService = (data) => axiosClient.post('api/QuanLyKhoaHoc/HuyGhiDanh', data)

export const registerCourseService = (data) => axiosClient.post('api/QuanLyKhoaHoc/DangKyKhoaHoc', data)

export const getDetailCourseService = ({ query }) => {
  const q = QueryString.stringify(query)
  return axiosClient.get(`api/QuanLyKhoaHoc/LayThongTinKhoaHoc?${q}`)
}

export const getCoursesWithPaginationService = ({ queries }) => {
  const q = QueryString.stringify(queries)
  return axiosClient.get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?${q}`)
}

export const getCoursesByCateService = ({ queries }) => {
  const q = QueryString.stringify(queries)
  return axiosClient.get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?${q}`)
}
