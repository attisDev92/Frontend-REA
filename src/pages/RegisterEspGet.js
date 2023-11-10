import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormGestor from "../components/FormGestor";
import FormEspacio from "../components/FormEspacio";

const RegisterEspGes = ({ userData }) => {

    const [ user ] = useState(userData);
    const [ renderForm, setRenderForm ] = useState('');
    const navigateTo = useNavigate();

    useEffect(() => {

        if(!userData) {
            return navigateTo('/login');
        }

        if(user.registerEspacio || user.registerGestor) {
            return navigateTo('/profile');
        }

    }, [])

    const handlerRenderForm = () => {
        if (renderForm === 'espacio') {
            return <FormEspacio userData={user} />
        } else if (renderForm === 'gestor') {
            return <FormGestor userData={user} />
        } else {
            return <h3>Seleccione una opcion </h3>
        }
    }

    return(
        <div>
            <h1>Register Espacio o Gestor</h1>
            <h3>Bienvenido {user.user}</h3>
            <div className="row contenedor__btn--superior">
                <button onClick={() => setRenderForm('espacio')} className="col-md-6 btn--superior">
                    <h2>Registro Espacio</h2>
                    <p>Registro Espacio<br/>
                    Este registro es para espacios que realicen exhibiciones cinematográficas que quieran ser parte de la REA y acceder a sus beneficios.</p>
                </button>
                <button onClick={() => setRenderForm('gestor')} className="col-md-6 btn--superior">
                    <h2>Registro Usuario</h2>
                    <p>Registro Usuario<br/> 
                    Este registro es para gestores culturales que trabajen en proyectos de exhibición de obras cinematográficas y quieran acceder a varios beneficios.</p>
                </button>
            </div>

            {handlerRenderForm()}

        </div>
        
    )
}

export default RegisterEspGes;