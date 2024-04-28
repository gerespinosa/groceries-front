import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { accessContext } from '../../../context/access.context.jsx';

import { Btn } from '../../../components/Btn.jsx'

export default function LoginForm() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { userLogin } = useContext(accessContext);

    const onLoginSubmit = async (user) => {
        try {
            await userLogin(user); // user is the data received from the form (even if you want to call it potito)
            navigate('/main');
        } catch (error) {
            alert("Credenciales no válidas");
        }
    };

    return (
        <form
            className='flex flex-col w-full justify-center items-center gap-4 rounded-lg p-4'
            onSubmit={handleSubmit(onLoginSubmit)}
        >
            <input
                className='w-2/3 bg-secondary bg-opacity-20 border-b-secondary border-b-2 p-2 h-14 text-text placeholder-text placeholder-opacity-45 rounded-t-lg'
                {...register('email')}
                type="email"
                placeholder='eMail'

            />
            <input
                className='w-2/3 bg-secondary bg-opacity-20 border-b-secondary border-b-2 p-2 h-14 text-text placeholder-text placeholder-opacity-45 rounded-t-lg'
                {...register('password')}
                type="password"
                placeholder='Password'
            />
            <Btn type='submit' children='Log In' />
        </form>
    );
}
