import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import { Box } from '@mui/system'

function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const navigate = useNavigate()

  function openMenu(event) {
    setAnchorEl(event.currentTarget)
    setIsMenuOpen(true)
  }

  function closeMenu() {
    setAnchorEl(null)
    setIsMenuOpen(false)
  }

  function onLogout() {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <AppBar>
      <Toolbar
        variant="dense"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
          <IconButton onClick={(event) => openMenu(event)}>
            <MenuIcon />
          </IconButton>
          <Menu
            open={isMenuOpen}
            anchorEl={anchorEl}
            onClose={() => closeMenu()}
          >
            <MenuItem onClick={() => onLogout()}>Logout</MenuItem>
          </Menu>
          <Typography variant="h6">POKE IT</Typography>
        </Box>
        <Box>
          <Link to={'/home'}>
            <Button
              sx={{ backgroundColor: 'white', color: 'blue' }}
              variant="raised"
            >
              Home
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default MainLayout
