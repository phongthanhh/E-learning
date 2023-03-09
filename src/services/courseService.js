import { GROUP_ID } from 'constant'
import { get } from './baseService'

export const getCategoryService = () => get('api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
export const getListCourseService = () => get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`)
