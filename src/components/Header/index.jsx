import { BarsOutlined } from '@ant-design/icons'
import { Avatar } from '@mui/material'
import { history } from 'App'
import { LOGO } from 'assets'
import { ROUTES_NAME, USER_LOGIN } from 'constant'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import InfoIcon from '@mui/icons-material/Info'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { SIGN_OUT } from 'stores'
import { StyleHeader } from './styled'

function Header() {
  const dispatch = useDispatch()
  const [showDrop, setShowDrop] = useState(false)
  const { categoryArr } = useSelector((state) => state.courseReducer)
  const { userLogin } = useSelector((state) => state.userReducer)

  const renderCategory = useMemo(() => categoryArr?.map(((item) => (
    <li key={item.maDanhMuc}>
      <NavLink to={`${ROUTES_NAME.CATEGORY}/${item.maDanhMuc}`}>{item.tenDanhMuc}</NavLink>
    </li>
  ))), [categoryArr])

  return (
    <StyleHeader>
      <div className="header__left">
        <NavLink to={ROUTES_NAME.HOME}>
          <img className="header__left__img" src={LOGO} alt="logo" />
        </NavLink>
        <form>
          <input type="text" className="searchForm ml-4" placeholder="Tìm kiếm" />
        </form>
      </div>
      <div className="header__right">
        <ul className="header__right__menu">
          <li className="courseCate">
            <BarsOutlined className="mr-1" />
            <NavLink className="menu__name" to="/">Danh mục</NavLink>
            <ul className="courseCateList">
              {renderCategory}
            </ul>
          </li>
          <li>
            <NavLink className="menu__name" to={ROUTES_NAME.COURSE}>Khóa học</NavLink>
          </li>
          <li><NavLink className="menu__name" to={ROUTES_NAME.BLOG}>Blog</NavLink></li>
          <li><NavLink className="menu__name" to={ROUTES_NAME.EVENT}>Sự kiện</NavLink></li>
          <li><NavLink className="menu__name" to={ROUTES_NAME.INFO}>Thông tin</NavLink></li>
        </ul>
      </div>
      <div className="header__showIcon">
        {userLogin !== null ? (
          <div className="user__info">
            <div className="user__logged">
              <div className="user__logged__img">
                <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?u=63453463" />
              </div>
              <span className="user__logged__name">{userLogin?.hoTen}</span>
            </div>
            <div className="dropdown">
              <div
                aria-hidden="true"
                className="dropdown__select"
                title="Cá nhân"
                onClick={() => {
                  setShowDrop(!showDrop)
                }}
              >
                <ArrowDropDownIcon
                  className="dropdown__select__icon"
                  style={{ transform: `${showDrop ? 'rotate(-180deg)' : 'rotate(0deg)'}` }}
                />
              </div>
              <div className="dropdown__list" style={showDrop ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}>
                <ul>
                  <li aria-hidden="true" onClick={() => history.push(ROUTES_NAME.INFO)}>
                    <span>
                      <InfoIcon className="dropdown__list__icon" />
                      Thông tin tài khoản
                    </span>
                  </li>
                  <li aria-hidden="true" onClick={() => history.push('/admin')}>
                    <span>
                      <AdminPanelSettingsIcon className="dropdown__list__icon" />
                      Admin
                    </span>
                  </li>
                  <li
                    aria-hidden="true"
                    onClick={() => {
                      localStorage.removeItem(USER_LOGIN)
                      dispatch({ type: SIGN_OUT })
                    }}
                  >
                    <span>
                      <ExitToAppIcon className="dropdown__list__icon" />
                      Đăng xuất
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => history.push(ROUTES_NAME.LOGIN)} type="button" className="btn__global">
            Đăng nhập
          </button>
        ) }
      </div>
    </StyleHeader>
  )
}

export default Header
