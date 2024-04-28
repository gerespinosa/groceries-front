import React from 'react'
// import LogoutBtn from './components/LogoutBtn.jsx'
import Navbar from '../../components/Navbar.jsx'
import OptionLayout from './components/OptionLayout.jsx'


export default function MainPage() {

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center bg-lighter overflow-hidden'>
            <Navbar />
            <OptionLayout />
        </div>

    )
}
