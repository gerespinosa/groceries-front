import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

import { accessContext } from '../../../context/access.context.jsx';

export default function LogoutBtn() {

    const navigate = useNavigate()

    const { userLogout } = useContext(accessContext)

    const onLogoutClick = async () => {
        userLogout()
        navigate('/')
    }

    return (
        <>
            <Button variant="contained" onClick={onLogoutClick}>Log Out</Button>
        </>
    )
}