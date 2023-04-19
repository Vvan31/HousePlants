import React from 'react';
import AccountMenu from '@/components/Header/AccountMenu';

import { AppBar, Avatar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box, Container, Tooltip, useRadioGroup } from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';

const pages = ['Add New'];

const Header = ({ user, setUser, actualPage, setActualPage, image }) =>{
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = (e) => {
        switch (e.target.innerText) {
            case 'MY PLANTS':
                setActualPage('My Plants');
                break;
            case 'ADD NEW':
                setActualPage('Add New');
                break;
            case 'LOG OUT':
                setUser(null);
                break;
            default:
                break;
        }
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{padding:'0'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="button"
                        onClick={() => setActualPage('My Plants')}
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        backgroundColor: 'transparent',
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        {user}'s Plants
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
                            <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
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
                       {user}'s Plants
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {/* <Avatar alt="R" src="/src/assets/viviana.png" /> */}
                            <AccountMenu user={user} setUser={setUser} setActualPage={setActualPage} image={image} />
                    </Box>
                </Toolbar>
            </Container> 
        </AppBar>
    )
};

export default Header;