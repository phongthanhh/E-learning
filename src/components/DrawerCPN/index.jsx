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
import { ROUTES_NAME } from 'constant'
import InfoIcon from '@mui/icons-material/Info'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import LogoutIcon from '@mui/icons-material/Logout'
import SearchCourse from 'components/Header/SearchCourse'
import { SwitchThemeButton } from 'components'
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined'
import { StyledDrawer } from './styled'

export default function DrawerCPN({ userLogin }) {
  const [openDrawer, setOpenDrawer] = React.useState(false)

  return (
    <div>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <StyledDrawer>
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?u=63453463" />
              </ListItemIcon>
              <ListItemText className="user__name" primary={userLogin.hoTen} />
            </ListItem>

            <ListItem>
              <SearchCourse />
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Brightness6OutlinedIcon className="drawer__icon" />
                </ListItemIcon>
                <ListItemText className="darkmod__btn">
                  <div>Chế độ tối </div>
                  <SwitchThemeButton />
                </ListItemText>
              </ListItemButton>
            </ListItem>

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

            <ListItem>
              <NavLink to={ROUTES_NAME.INFO} style={{ width: '100%' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon className="drawer__icon" />
                  </ListItemIcon>
                  <ListItemText primary="Thông tin tài khoản" />
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to={ROUTES_NAME.COURSE} style={{ width: '100%' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <LibraryBooksIcon className="drawer__icon" />
                  </ListItemIcon>
                  <ListItemText primary="Khóa học" />
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink to={ROUTES_NAME.INFO} style={{ width: '100%' }}>
                <ListItemButton>
                  <ListItemIcon>
                    <InfoIcon className="drawer__icon" />
                  </ListItemIcon>
                  <ListItemText primary="Thông Tin" />
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem className="signOut">
              <ListItemButton className="signOut__btn">
                <ListItemIcon>
                  <LogoutIcon className="drawer__icon" />
                </ListItemIcon>
                <ListItemText primary="Đăng xuất"> </ListItemText>
              </ListItemButton>
            </ListItem>

          </List>
        </StyledDrawer>
      </Drawer>
      <Button onClick={() => setOpenDrawer(!openDrawer)}><MenuIcon className="drawer__toggle" /></Button>
    </div>
  )
}
