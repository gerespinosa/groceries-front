import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/', //DO NOT FORGET THE SLASH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    withCredentials: true
})

export default instance