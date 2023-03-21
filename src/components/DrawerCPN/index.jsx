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
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'
import { NavLink } from 'react-router-dom'
import { ROUTES_NAME } from 'constant'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import SearchCourse from 'components/Header/SearchCourse'
import { StyledDrawer } from './styled'

export default function DrawerCPN({ userLogin }) {
  console.log(userLogin)
  const [openDrawer, setOpenDrawer] = React.useState(false)

  return (
    <StyledDrawer>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?u=63453463" />
            </ListItemIcon>
            <ListItemText primary={userLogin.hoTen} />
          </ListItem>

          <ListItem>
            <SearchCourse />
          </ListItem>

          <ListItem>
            <NavLink to={ROUTES_NAME.COURSE} style={{ width: '100%' }}>
              <ListItemButton>
                <ListItemIcon>
                  <LibraryBooksOutlinedIcon className="drawer__icon" />
                </ListItemIcon>
                <ListItemText primary="Khóa học" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem>
            <NavLink to={ROUTES_NAME.INFO} style={{ width: '100%' }}>
              <ListItemButton>
                <ListItemIcon>
                  <InfoOutlinedIcon className="drawer__icon" />
                </ListItemIcon>
                <ListItemText primary="Thông Tin" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem className="signOut">
            <ListItemButton className="signOut__btn">
              <ListItemIcon>
                <LogoutOutlinedIcon className="drawer__icon" />
              </ListItemIcon>
              <ListItemText primary="Đăng xuất" />
            </ListItemButton>
          </ListItem>

        </List>
      </Drawer>
      <Button onClick={() => setOpenDrawer(!openDrawer)}><MenuIcon className="drawer__toggle" /></Button>
    </StyledDrawer>
  )
}
