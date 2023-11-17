import { useEffect, useState } from "react";
import { FormNatural } from "../components/Formularios de registro/FormNatural";
import { FormJuridico } from "../components/Formularios de registro/FormJuridico";
import { useNavigate } from "react-router-dom";

const RegisterProfile = ({ userData }) => {

    const [ user ] = useState(userData);
    const navigateTo = useNavigate();

    useEffect(() => {
        if(!user) {
            return navigateTo('/login');
        }
    
        if(user.registerJuridico || user.registerNatural) {
            return navigateTo('/register_esp_usu');
        }
    }, [])
    
    const handlerRenderForm = () => {

        if(user.juridico) {
            return<FormJuridico />
        }
        if(user.natural) {
            return <FormNatural />
        }
    }

    return(
        <div className="contenedor__registro">
            {handlerRenderForm()}
        </div>
    )
}

export default RegisterProfile;