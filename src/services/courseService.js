import { GROUP_ID } from 'constant'
import QueryString from 'query-string'
import { get, post } from './baseService'

export const getCategoryService = () => get('api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')

export const getCoursesService = ({ queries = {} }) => {
  const q = { maNhom: GROUP_ID, ...queries }
  return get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?${QueryString.stringify(q)}`)
}

export const getDetailCourseService = ({ query }) => {
  const q = QueryString.stringify(query)
  return get(`api/QuanLyKhoaHoc/LayThongTinKhoaHoc?${q}`)
}

export const getCoursesWithPaginationService = ({ queries }) => {
  const q = QueryString.stringify(queries)
  return get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?${q}`)
}

export const getListCourseByCateService = ({ queries }) => {
  const q = QueryString.stringify(queries)
  return get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?${q}`)
}

export const cancelRegistrationService = (data) => post('api/QuanLyKhoaHoc/HuyGhiDanh', data)
