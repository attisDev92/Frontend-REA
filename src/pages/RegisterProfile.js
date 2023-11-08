import { useState } from "react";
import { FormNatural } from "../components/FormNatural";
import { FormJuridico } from "../components/FormJuridico";
import { useNavigate } from "react-router-dom";

const RegisterProfile = ({ userData }) => {

    const [ user ] = useState(userData);
    const navigateTo = useNavigate();

    if(!userData) {
        return navigateTo('/login');
    }
    
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
            Register profile
            <h2>Bienvenido {user.user} </h2>
            {handlerRenderForm()}
        </div>
    )
}

export default RegisterProfile;