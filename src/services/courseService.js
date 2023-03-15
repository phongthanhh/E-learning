/* eslint-disable max-len */
import { GROUP_ID } from 'constant'
import QueryString from 'query-string'
import { get } from './baseService'

export const getCategoryService = () => get('api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')

export const getListCourseService = () => get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`)

export const getDetailCourseService = (courseCode) => get(`api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseCode}`)

export const getCoursesWithPaginationService = ({ queries }) => {
  const q = QueryString.stringify(queries)
  return get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?${q}`)
}

export const getListCourseCateService = (cateCode) => get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${cateCode}&MaNhom=${GROUP_ID}`)
