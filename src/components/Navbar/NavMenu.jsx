import React, {useState} from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export const NavMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);

  return (
    <div>NavMenu</div>
  )
}
