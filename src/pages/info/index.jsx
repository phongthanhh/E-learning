import { Button } from '@mui/material'
import { Image } from 'components'
import { DARK } from 'constant'
import React, {
  useCallback, useEffect, useMemo, useState
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoUserAction } from 'stores'
import CourseItem from './CourseItem'
import ModalInfo from './ModalInfo'
import { StyledInfo } from './styled'

function Info() {
  const { themeMode } = useSelector((state) => state.themeReducer)
  // Use hooks
  const dispatch = useDispatch()
  const { userInfo, isUpdating } = useSelector((state) => state.userReducer)
  // End use hooks

  // Use states
  const [isOpenModalInfo, setIsOpenModalInfo] = useState(false)
  // End use states

  const onOpenModalInfo = useCallback(() => {
    setIsOpenModalInfo(true)
  }, [])

  const onCloseModalInfo = useCallback(() => {
    setIsOpenModalInfo(false)
  }, [])

  useEffect(() => {
    if (!isUpdating) {
      dispatch(getInfoUserAction())
    }
  }, [dispatch, isUpdating])

  const renderListCourse = useMemo(() => userInfo.chiTietKhoaHocGhiDanh?.map((course) => (
    <CourseItem course={course} userName={userInfo.taiKhoan} key={course.maKhoaHoc} />
  )), [userInfo])

  return (
    <StyledInfo>
      <div className={`row ${themeMode === DARK ? 'themeDark' : null}`}>
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
            <div className="info__btn">
              <Button variant="contained" color="primary" onClick={onOpenModalInfo}>Cập nhật</Button>
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
      <ModalInfo
        open={isOpenModalInfo}
        onOpen={onOpenModalInfo}
        onClose={onCloseModalInfo}
      />
    </StyledInfo>
  )
}

export default Info
