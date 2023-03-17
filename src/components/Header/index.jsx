import { BarsOutlined } from '@ant-design/icons'
import { Avatar } from '@mui/material'
import { history } from 'App'
import { ROUTES_NAME, USER_LOGIN } from 'constant'
import React, {
  useMemo, useState, useEffect, useRef, memo
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import InfoIcon from '@mui/icons-material/Info'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { SIGN_OUT } from 'stores'
import Swal from 'sweetalert2'
import { MENU_HEADER_DATA } from 'data'
import { LOGO } from 'assets'
import { StyleHeader } from './styled'
import SearchCourse from './SearchCourse'

function Header() {
  const dispatch = useDispatch()
  const { categoryArr } = useSelector((state) => state.courseReducer)
  const { userLogin } = useSelector((state) => state.userReducer)
  const [showDrop, setShowDrop] = useState(false)

  const reShow = useRef()
  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event)
      }
      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)
      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    }, [ref, handler])
  }

  useOnClickOutside(reShow, () => setShowDrop(false))

  const renderCategories = useMemo(() => categoryArr?.map(((item) => (
    <li key={item.maDanhMuc}>
      <NavLink to={`${ROUTES_NAME.CATEGORY}/${item.maDanhMuc}`}>{item.tenDanhMuc}</NavLink>
    </li>
  ))), [categoryArr])

  const renderMenu = useMemo(() => MENU_HEADER_DATA.map((menu) => {
    if (menu.pathname === ROUTES_NAME.ROOT) {
      return (
        <li className="courseCate" key={menu.pathname}>
          <BarsOutlined className="mr-1" />
          <NavLink className="menu__name" to={menu.pathname}>{menu.name}</NavLink>
          <ul className="courseCateList">
            {renderCategories}
          </ul>
        </li>
      )
    }
    return <li key={menu.pathname}><NavLink className="menu__name" to={menu.pathname}>{menu.name}</NavLink></li>
  }), [renderCategories])

  return (
    <StyleHeader>
      <div className="header__left">
        <NavLink to={ROUTES_NAME.HOME}>
          <img className="header__left__img" src={LOGO} alt="logo" />
        </NavLink>
        <SearchCourse />
      </div>
      <div className="header__right">
        <ul className="header__right__menu">
          {renderMenu}
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
            <div className="dropdown" ref={reShow}>
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
                  <li
                    aria-hidden="true"
                    onClick={() => {
                      history.push(ROUTES_NAME.INFO)
                      setShowDrop(false)
                    }}
                  >
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
                      Swal.fire({
                        title: 'Bạn có muốn đăng xuất?',
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Đăng xuất',
                        cancelButtonText: 'Hủy'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          localStorage.removeItem(USER_LOGIN)
                          dispatch({ type: SIGN_OUT })
                        }
                      })
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

export default memo(Header)
