import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest, logoutRequest } from "../services/access.services.js"
import Cookies from 'js-cookie'

export const accessContext = createContext();

export const AccessProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [auth, setAuth] = useState(false)
    const [userFound, setUserFound] = useState({})

    const navigate = useNavigate();

    // LOGIN - FRONTEND
    const userLogin = async (user) => {
        try {
            const res = await loginRequest(user)
            const userFound = res.data.userFound
            setUserFound(userFound)
            setAuth(true)
            if (userFound && userFound._id) {
                navigate(`/main/${userFound._id}`);
            }
        } catch (error) {
            console.log(error)
            alert("Credenciales no válidas")
        }

        return userFound
    }

    // LOGOUT - FRONTEND
    const userLogout = async () => {
        try {
            await logoutRequest()
            Cookies.remove('pollita')
            console.log('Sesion cerrada supolla')
            setUser(null)
            alert("Sesión cerrada")
            setAuth(false)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <accessContext.Provider
            value={{ userLogin, userLogout, user, auth, userFound, setUser, setAuth, setUserFound }}>
            {children}
        </accessContext.Provider>
    )
}

export const useAccess = () => useContext(accessContext)