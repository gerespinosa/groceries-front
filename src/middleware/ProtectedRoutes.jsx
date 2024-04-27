import { useAuth } from "../context/access.context.jsx"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {

    const { auth } = useAuth()

    if (!auth) return <Navigate to="/" replace />
    return (<Outlet />)
}

