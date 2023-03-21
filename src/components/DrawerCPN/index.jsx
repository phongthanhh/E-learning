/* eslint-disable no-magic-numbers */
import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import {
  Button,
  List, ListItemButton, ListItemIcon, ListItemText
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export default function DrawerCPN() {
  const [openDrawer, setOpenDrawer] = React.useState(false)
  return (
    <div>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Loginnnnnnnnnnnnnnn</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <Button onClick={() => setOpenDrawer(!openDrawer)}><MenuIcon /></Button>
    </div>
  )
}
