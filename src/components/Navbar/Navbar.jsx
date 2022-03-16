import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// Imports for Back to top button vvv
import { useScrollTrigger } from '@mui/material'
import Zoom from '@mui/material/Zoom'
import PropTypes from 'prop-types'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
// Imports for Back to top button ^^^

// Back to top function vvv
const ScrollTop = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center,'
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role='presentation'
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16
                }}>
                {children}
            </Box>
        </Zoom>
    )
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
}

// Back to top function ^^^

export const Navbar = (props) => {
    return (
        <Box
            sx={{
                flexGrow: 1
            }}>
            <AppBar
                position='static'>
                <Toolbar
                    id='back-to-top-anchor'>
                    <Typography
                        variant='h5'
                        component='div'
                        sx={{
                            flexGrow: 1
                        }}>
                        Kevin Sana
                    </Typography>
                    
                </Toolbar>
                <ScrollTop {...props}>
                    <Fab
                        color='primary'
                        size='small'
                        aria-label='scroll back to top'>
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </AppBar>
        </Box>
    )
}
