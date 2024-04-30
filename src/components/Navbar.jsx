import * as React from 'react';
import { AppBar, Box, IconButton, Menu, Avatar, Tooltip, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAccess } from '../context/access.context';

export default function Navbar() {

    const { userLogout } = useAccess()

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const onLogoutClick = () => {
        userLogout()
        alert("Sesión cerrada")
    }


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
                        {
                            <MenuItem onClick={handleCloseUserMenu} sx={{ display: 'flex', flexDirection: 'column', gap: 1, justifyContent: 'center', alignItems: 'start' }}>
                                <Link>Mis Listas</Link>
                                <Link>Ajustes</Link>
                                <Link onClick={onLogoutClick} >Log Out</Link>
                            </MenuItem>
                        }
                    </Menu>
                </Box>
            </AppBar>
        </Box >
    );
}
