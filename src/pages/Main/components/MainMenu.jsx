import React from 'react'
import { Link } from 'react-router-dom'
import { useAccess } from '../../../context/access.context.jsx'

function MainMenu() {

    const { userFound } = useAccess()

    return (
        <div>
            <Link to={`/user/${userFound._id}/lists`} className='bg-black bg-opacity-10 text-4xl flex gap-10 p-4 text-text justify-between items-center'><i className="text-text p-2 rounded-full bg-tertiary ri-list-check-2"></i>Ver Listas</Link>
            <Link to={'/lists/new'} className='bg-black bg-opacity-10 text-4xl flex gap-10 p-4 text-text justify-between items-center'><i className="text-text p-2 rounded-full bg-tertiary ri-play-list-add-line"></i>Crear Lista</Link>
            <Link to={`/user/${userFound._id}/settings`} className='bg-black bg-opacity-10 text-4xl flex gap-10 p-4 text-text justify-between items-center'><i className="text-text p-2 rounded-full bg-tertiary ri-settings-5-line"></i>Ajustes</Link>
            <Link to={`/user/${userFound._id}/feedback`} className='bg-black bg-opacity-10 text-4xl flex gap-10 p-4 text-text justify-between items-center'><i className="text-text p-2 rounded-full bg-tertiary ri-feedback-line"></i>Feedback</Link>
        </div>
    )
}

export default MainMenu