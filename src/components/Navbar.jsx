import * as React from 'react';
import { AppBar, Box, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem } from '@mui/material';

const settings = ['Mis Listas', 'Perfil', 'Logout'];

export default function Navbar() {

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: '#14532D', p: 1, justifyContent: 'space-between', display: 'flex', flexDirection: 'row' }}>
                <span></span>
                {/* LOGO */}
                <h1 className='text-lighter lowercase font-comfortaa text-2xl font-normal'>groceries<b className='font-bold'>app</b></h1>
                {/* PROFILE ICON */}
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Abrir menú">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="G" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </AppBar>
        </Box >
    );
}
