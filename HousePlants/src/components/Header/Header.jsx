import React from 'react';
import { useNavigate } from 'react-router-dom';

import AccountMenu from '@/components/Header/AccountMenu';

import { AppBar, Avatar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box, Container, Tooltip, useRadioGroup } from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';

import './Header.css'
const pages = ['Add New'];

const Header = () =>{
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const navigate = useNavigate();
    
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        switch (e.target.innerText) {
            case 'MY PLANTS':
                navidate('/myplants');
                break;
            case 'ADD NEW':
                navigate('/addnew');
                break;
            case 'LOG OUT':
                navidate('/');
                break;
            default:
                break;
        }
        setAnchorElNav(null);
    };

    return (
        <AppBar sx={{padding:'0' , top:'0'}} className='searchbar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="button"
                        onClick={() => navigate('/myplants')}
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        backgroundColor: 'transparent',
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                        className='title'
                    >
                        My Plants
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="button"
                        onClick={() => navigate('/addnew')}
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        backgroundColor: 'transparent',
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                        className='title'
                    >
                        Add new plant
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography 
                            textAlign="center" 
                            onClick={() => navigate((`/${page.toLowerCase().replace(/\s/g, (""))}`))}
                            >{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        onClick={() => navigate('/myplants')}
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                       My Plants
                    </Typography>
                    <Box sx={{ flexGrow: 0 }}>
                        <AccountMenu user={'User'} />
                    </Box>
                </Toolbar>
            </Container> 
        </AppBar>
    )
};

export default Header;