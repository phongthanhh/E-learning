/* eslint-disable no-magic-numbers */
import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import {
  Avatar,
  Button,
  List
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { NavLink } from 'react-router-dom'
import { ROUTES_NAME, USER_LOGIN } from 'constant'
import InfoIcon from '@mui/icons-material/Info'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchCourse from 'components/Header/SearchCourse'
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import { history } from 'App'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { SIGN_OUT } from 'stores'
import { SwitchThemeButton } from 'components'
import { StyledContent, StyledDrawer } from './styled'

export default function DrawerCPN({ userLogin }) {
  const dispatch = useDispatch()
  const [openDrawer, setOpenDrawer] = React.useState(false)

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
        localStorage.removeItem(USER_LOGIN)
        dispatch({ type: SIGN_OUT })
        history.push(ROUTES_NAME.HOME)
        Swal.fire({
          title: 'Đăng xuất thành công',
          icon: 'success',
          text: 'Cảm ơn bạn đã sử dụng dịch vụ!',
          confirmButtonText: 'Ok'
        })
      }
    })
  }
  const onCloseDrawer = () => setOpenDrawer(false)

  return (
    <StyledDrawer>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <StyledContent>
          <List>
            {userLogin ? (
              <ListItem>
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?u=63453463" />
                </ListItemIcon>
                <ListItemText className="user__name" primary={userLogin.hoTen} />
              </ListItem>
            ) : (
              <ListItem className="signOut">
                <ListItemButton className="signOut__btn" onClick={() => history.push(ROUTES_NAME.LOGIN)}>
                  <ListItemIcon>
                    <LoginOutlinedIcon className="drawer__icon" />
                  </ListItemIcon>
                  <ListItemText primary="Đăng nhập"> </ListItemText>
                </ListItemButton>
              </ListItem>
            ) }

            <ListItem>
              <SearchCourse />
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Brightness6OutlinedIcon className="drawer__icon" />
                </ListItemIcon>
                <ListItemText className="darkMode__btn">
                  <div>Chế độ tối </div>
                  <SwitchThemeButton />
                </ListItemText>
              </ListItemButton>
            </ListItem>

            {userLogin ? (
              <ListItem>
                <NavLink to={ROUTES_NAME.INFO} style={{ width: '100%' }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AdminPanelSettingsIcon className="drawer__icon" />
                    </ListItemIcon>
                    <ListItemText primary="Admin" />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ) : null}

            {userLogin ? (
              <ListItem>
                <NavLink to={ROUTES_NAME.INFO} onClick={onCloseDrawer} style={{ width: '100%' }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountCircleIcon className="drawer__icon" />
                    </ListItemIcon>
                    <ListItemText primary="Thông tin tài khoản" />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ) : null }

            <ListItem>
              <NavLink to={ROUTES_NAME.COURSE} onClick={onCloseDrawer} style={{ width: '100%' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <LibraryBooksIcon className="drawer__icon" />
                  </ListItemIcon>
                  <ListItemText primary="Khóa học" />
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to={ROUTES_NAME.INFO} onClick={onCloseDrawer} style={{ width: '100%' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <InfoIcon className="drawer__icon" />
                  </ListItemIcon>
                  <ListItemText primary="Thông Tin" />
                </ListItemButton>
              </NavLink>
            </ListItem>

            {userLogin ? (
              <ListItem className="signOut">
                <ListItemButton onClick={handleSignOut} className="signOut__btn">
                  <ListItemIcon>
                    <LogoutIcon className="drawer__icon" />
                  </ListItemIcon>
                  <ListItemText primary="Đăng xuất"> </ListItemText>
                </ListItemButton>
              </ListItem>
            ) : null }

          </List>
        </StyledContent>
      </Drawer>
      <Button onClick={() => setOpenDrawer(!openDrawer)}><MenuIcon className="drawer__toggle" /></Button>
    </StyledDrawer>
  )
}
