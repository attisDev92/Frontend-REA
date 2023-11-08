import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterEspGes = ({ userData }) => {

    const [ user, setUser ] = useState({});
    const navigateTo = useNavigate();

    useEffect (() => {
        if(!userData) {
            return navigateTo('/login')
        }

        setUser(userData)

    }, [])

    const handlerRenderForm = () => {
        
    }

    return(
        <div>

            <h1>Register Espacio o Gestor</h1>
            <h3>Bienvenido {user.user}</h3>
            {handlerRenderForm()}

        </div>
        
    )
}

export default RegisterEspGes;