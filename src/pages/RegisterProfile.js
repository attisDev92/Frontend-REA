import { useEffect, useState } from "react";
import { FormNatural } from "../components/FormNatural";
import { FormJuridico } from "../components/FormJuridico";
import { useNavigate } from "react-router-dom";

const RegisterProfile = ({ userData }) => {

    const [ user ] = useState(userData);
    const navigateTo = useNavigate();

    useEffect(() => {

        if(!userData) {
            return navigateTo('/login');
        }

        if(user.registerJuridico || user.registerNatural) {
            return navigateTo('/register_esp_usu');
        }

        if(user.registerEspacio || user.registerGestor) {
            return navigateTo('./profile');
        }
        
    }, [])
    
    
    const handlerRenderForm = () => {

        if(user.juridico) {
            return<FormJuridico userData={user}/>
        }
        if(user.natural) {
            return <FormNatural userData={user}/>
        }
    }

    return(
        <div>
            <h1>Register profile</h1>
            <h2>Bienvenido {user.user} </h2>
            {handlerRenderForm()}
        </div>
    )
}

export default RegisterProfile;