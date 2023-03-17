/* eslint-disable max-len */
import { Image } from 'components'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoUserAction } from 'stores'
import CourseItem from './CourseItem'
import { StyledInfo } from './styled'

function Info() {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userReducer)
  useEffect(() => {
    dispatch(getInfoUserAction())
  }, [userInfo, dispatch])

  const renderListCourse = useMemo(() => userInfo.chiTietKhoaHocGhiDanh?.map((course) => (
    <CourseItem course={course} userName={userInfo.taiKhoan} key={course.maKhoaHoc} />
  )), [userInfo])

  return (
    <StyledInfo>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4 mb-lg-0">
          <div className="info">
            <h5>Thông tin cá nhân</h5>
            <div className="info__img">
              <Image className="info__img__img" width="100px" height="100px" src="https://i.pravatar.cc/300?u=63453463" alt="avatar" />
            </div>
            <div className="info__item">
              <p>Họ tên</p>
              <strong>{userInfo?.hoTen}</strong>
            </div>
            <div className="info__item">
              <p>Email</p>
              <strong>{userInfo?.email}</strong>
            </div>
            <div className="info__item">
              <p>Số điện thoại</p>
              <strong>{userInfo?.soDT}</strong>
            </div>
            <div className="info__item">
              <p>Đối tượng</p>
              <strong>{userInfo?.maLoaiNguoiDung === 'HV' ? 'Học viên' : 'Giáo vụ'}</strong>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-12">
          <div className="course">
            <div className="course__head">
              <h5>Khóa học của tôi</h5>
            </div>
            <div className="course__body">
              {renderListCourse}
            </div>
          </div>
        </div>
      </div>
    </StyledInfo>
  )
}

export default Info
