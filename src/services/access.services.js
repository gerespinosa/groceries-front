import instance from './axios'

export const loginRequest = (user) => instance.post('/', user) //LOGIN

export const logoutRequest = () => instance.post('/logout') //LOGOUT
