import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCorrect from "../components/Correct user info componentes/ProfileCorrect";
import GestorCorrect from "../components/Correct user info componentes/GestorCorrect"
import EspaciosCorrect from "../components/Correct user info componentes/EspaciosCorrect";

const CorrectRegister = ({ userData }) => {
    
    const [ user ] = useState(userData);
    const navigateTo = useNavigate()

    return (
        <div> 
            <button className="btn btn--cerrar" onClick={() => navigateTo('/profile')}>Atrás</button>
            
            <div className="container__notification">
                
                <h4>Notificaciones del perfil</h4>
                <ProfileCorrect userData={user} />

                <hr></hr>
                
                <h4>Notificaciones de Espacios</h4>
                <EspaciosCorrect userData={user} />

                <hr></hr>

                <h4>Notificaciones de Usuario del Banco de Contenidos</h4>
                <GestorCorrect userData={user} />
            </div>
        </div>
    )
}

export default CorrectRegister;