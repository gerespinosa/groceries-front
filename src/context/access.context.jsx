import { createContext, useState, useEffect } from "react";
import { loginRequest, logoutRequest } from "../services/access.services.js"

export const accessContext = createContext();

export const AccessProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [auth, setAuth] = useState(false)

    // LOGIN - FRONTEND
    const userLogin = async (user) => {
        try {
            const res = await loginRequest(user)
            setUser(res.data)
            setAuth(true)
            console.log('Este es el user', user)

        } catch (error) {
            console.log(error)
            alert("Credenciales no válidas")
        }
    }

    // LOGOUT - FRONTEND
    const userLogout = async () => {
        try {
            const res = await logoutRequest()
            setUser(null)
            alert("Sesión cerrada")
            setAuth(false)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <accessContext.Provider
            value={{ userLogin, userLogout, user, auth, setUser, setAuth }}>
            {children}
        </accessContext.Provider>
    )
}