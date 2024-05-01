import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAccess } from '../../../context/access.context.jsx';
import { createListRequest } from '../../../services/lists.services.js';

export default function NewListForm() {
    const { userFound } = useAccess()
    const userId = userFound._id

    const [list, setList] = useState({})

    const navigate = useNavigate()

    const { register, handleSubmit } = useForm();

    const onListNameSubmit = async (data) => {
        try {
            const res = await createListRequest(userId, data.name);
            setList(res.data);
            const listId = list._id;
            if (listId) {
                navigate(`/user/${userId}/lists/${listId}`)
            }
        } catch (error) {
            console.log(error);
        }
    }
                          
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center bg-black bg-opacity-20 gap-2 p-2'>
            <form
                className='flex flex-col w-full justify-center items-center gap-4 rounded-lg p-4'
                onSubmit={handleSubmit(onListNameSubmit)}>
                <input
                    className='w-full bg-secondary bg-opacity-20 border-b-secondary border-b-2 p-2 h-14 text-text text-center placeholder-text placeholder-opacity-45 rounded-t-lg'
                    {...register('name')}
                    type="text"
                    placeholder='Nombre de la lista' />
                <button className='w-1/3 bg-secondary bg-opacity-20 border-2 border-secondary text-text p-2 rounded-lg' type="submit">
                    Crear
                </button>
            </form>
        </div>
    )
}

