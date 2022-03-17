import React, { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export const NavMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 2 }}
                onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                <MenuItem
                    component='a'
                    href='#about'
                    onClick={handleClose}>
                    About
                </MenuItem>
                <MenuItem
                    component='a'
                    href='#projects'
                    onClick={handleClose}>
                    Projects
                </MenuItem>
                <MenuItem
                    component='a'
                    href='#contact'
                    onClick={handleClose}>
                    Contact
                </MenuItem>
            </Menu>
        </div>
    )
}