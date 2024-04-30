import React, { useEffect } from 'react';
import { useLists } from '../../../context/lists.context.jsx';
import { useAccess } from '../../../context/access.context.jsx';

function ListsList() {
    const { userFound } = useAccess();
    const { lists, getUserLists } = useLists();

    useEffect(() => {
        const userId = userFound._id;
        getUserLists();
    }, [userFound]);

    return (
        <div className='w-full h-screen flex flex-col justify-start gap-10 items-left bg-lighter overflow-hidden px-4'>
            <h1 className=' text-4xl font-bold font-comfortaa place-self-end text-right pt-20 text-tertiary'>Mis Listas</h1>
            <ul className='w-full min-h-96 flex flex-col justify-start place-self-start bg-black bg-opacity-10 gap-2 p-2'>
                {lists.map((list, index) => (
                    <li key={index} className='uppercase text-left font-bold font-comfortaa place-self-start text-tertiary flex gap-2 items-center justify-center'>
                        {list.name}
                        <i className="text-black ri-delete-bin-2-line"></i>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListsList;