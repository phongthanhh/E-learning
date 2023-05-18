import { BarsOutlined } from '@ant-design/icons'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import InfoIcon from '@mui/icons-material/Info'
import { Avatar } from '@mui/material'
import { history } from 'App'
import { LOGO } from 'assets'
import { DrawerCPN, SwitchThemeButton } from 'components'
import { ADMIN_URL, ROUTES_NAME, USER_LOGIN } from 'constant'
import { MENU_HEADER_DATA } from 'data'
import React, {
  memo,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { SIGN_OUT } from 'stores'
import Swal from 'sweetalert2'
import { getItem } from 'utils'
import QueryString from 'query-string'
import SearchCourse from './SearchCourse'
import { StyleHeader } from './styled'

function Header() {
  const dispatch = useDispatch()
  const { categoryArr } = useSelector((state) => state.courseReducer)
  const { themeMode } = useSelector((state) => state.themeReducer)
  const { userInfo, authenticated } = useSelector((state) => state.userReducer)
  const [showDrop, setShowDrop] = useState(false)
  const reShow = useRef()

  const handleSignOut = () => {
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
        if (userInfo.maLoaiNguoiDung === 'GV') {
          window.location.replace(`${ADMIN_URL}${ROUTES_NAME.REQUEST_SIGN_OUT}`)
        } else {
          dispatch({ type: SIGN_OUT })
        }
      }
    })
  }

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
    if (menu.pathname === ROUTES_NAME.HOME) {
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
    return <li key={menu.pathname}><NavLink className="menu__name" to={menu.pathname}><span>{menu.name}</span></NavLink></li>
  }), [renderCategories])

  const redirectToAdminPage = () => {
    const userLoggedIn = JSON.parse(getItem(USER_LOGIN))
    const queryParams = QueryString.stringify(userLoggedIn)

    window.location.replace(`${ADMIN_URL}${ROUTES_NAME.SYNC_USER}?${queryParams}`)
  }

  return (
    <StyleHeader>
      <div className="header__left">
        <NavLink to={ROUTES_NAME.HOME}>
          <img className="header__left__img" src={LOGO} alt="logo" />
        </NavLink>
        <div className="header__left__search">
          <SearchCourse />
        </div>
      </div>
      <div className="header__right">
        <div>
          <ul className="header__right__menu">
            {renderMenu}
          </ul>
        </div>
      </div>
      <div className={`header__showIcon ${themeMode === 'dark' ? 'themeDark' : ''}`}>
        {authenticated ? (
          <div className="user__info">
            <div className="user__logged">
              <div className="user__logged__img">
                <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?u=63453463" />
              </div>
              <span className="user__logged__name">{userInfo.hoTen}</span>
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
                  <li>
                    <span>
                      <Brightness6OutlinedIcon className="dropdown__list__icon" />
                      Chế độ tối
                    </span>
                    <SwitchThemeButton />
                  </li>
                  {userInfo.maLoaiNguoiDung === 'GV' ? (
                    <li aria-hidden="true" onClick={redirectToAdminPage}>
                      <span>
                        <AdminPanelSettingsIcon className="dropdown__list__icon" />
                        Admin
                      </span>
                    </li>
                  ) : ''}
                  <li
                    aria-hidden="true"
                    onClick={handleSignOut}
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
          <div className="user__info">
            <button onClick={() => history.push(ROUTES_NAME.LOGIN)} type="button" className="btn__global">
              Đăng nhập
            </button>
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
                  <li>
                    <span>
                      <Brightness6OutlinedIcon className="dropdown__list__icon" />
                      Chế độ tối
                    </span>
                    <SwitchThemeButton />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) }
      </div>
      <div className="header__drawer">
        <DrawerCPN />
      </div>
    </StyleHeader>
  )
}

export default memo(Header)
