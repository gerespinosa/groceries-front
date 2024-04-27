import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

import { accessContext } from '../../../context/access.context.jsx';


export default function loginForm() {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate()
    const { userLogin } = useContext(accessContext)

    const onLoginSubmit = handleSubmit(async (user) => { //the parameter is the data received from the form
        userLogin(user)
        alert("Sesión iniciada")
        navigate('/main')

    })

    return (
        <form className='flex flex-col w-1/2 justify-center items-center gap-4 bg-sky-200 p-4'
            onSubmit={onLoginSubmit}>
            <TextField className='w-full bg-white text-sky-800 placeholder-white'
                {...register('email')}
                label="eMail"
                type="email"
                autoComplete="current-email"
                variant="filled"
            />
            <TextField className='w-full bg-white text-sky-800 placeholder-sky-800'
                {...register('password')}
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
            />
            <Button className='w-1/2'
                variant="contained"
                type="submit">
                Log In
            </Button>
        </form>
    )
}