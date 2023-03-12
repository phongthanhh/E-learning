/* eslint-disable max-len */
import { GROUP_ID, PAGE_SIZE } from 'constant'
import { get } from './baseService'

export const getCategoryService = () => get('api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')

export const getListCourseService = () => get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`)

export const getDetailCourseService = (courseCode) => get(`api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseCode}`)

export const getPaniListCourseService = (currentPage) => get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=${PAGE_SIZE}&MaNhom=${GROUP_ID}`)

export const getListCourseCateService = (cateCode) => get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${cateCode}&MaNhom=${GROUP_ID}`)
