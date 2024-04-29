import React from 'react'
// import LogoutBtn from './components/LogoutBtn.jsx'
import Navbar from '../../components/Navbar.jsx'
import { useAccess } from '../../context/access.context.jsx'
import MainMenu from './components/MainMenu.jsx'


export default function MainPage() {

    const { userFound } = useAccess()

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center bg-lighter overflow-hidden'>
            <Navbar />
            <div className='w-screen h-screen flex flex-col justify-between items-center overflow-hidden pt-20'>
                <h1 className='text-4xl font-bold font-comfortaa place-self-end px-2 text-tertiary'>Menú Principal</h1>
                <MainMenu />
                <h1>{userFound.email}</h1>
            </div>
        </div>

    )
}
