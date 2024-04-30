import React from 'react';
import ListsList from './components/ListsList.jsx';
import { useAccess } from '../../context/access.context.jsx';
import Navbar from '../../components/Navbar.jsx';

function ListsPage() {

    const { userFound } = useAccess();

    return (
        <div>
            <Navbar />
            <div className='w-full h-screen flex flex-col justify-start gap-10 items-left bg-lighter overflow-hidden '>
                <ListsList />
                <h1 className='place-self-center'>{userFound.email}</h1>
            </div>
        </div>
    );
}

export default ListsPage;