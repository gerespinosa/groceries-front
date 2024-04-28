import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

import { accessContext } from "../context/access.context.jsx";

export const ProtectedRoutes = () => {
    const { auth } = useContext(accessContext); // Extraer 'auth' del contexto

    return auth ? <Outlet /> : <Navigate to='/' />;
};