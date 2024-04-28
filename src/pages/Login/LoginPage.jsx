import LoginForm from "./components/LoginForm.jsx"
import { Link } from "react-router-dom"

export default function LoginPage() {

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-lighter overflow-hidden">
            <img src="src\assets\logo.png" alt="logo" className="w-200 h-200" />
            <LoginForm />
            <Link to={'#'} className='text-text text-xs absolute bottom-4 h-fit'>Registrate aquí</Link>
        </div>
    )
}