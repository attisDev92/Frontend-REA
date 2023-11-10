import { useNavigate } from "react-router-dom";

const UserCreate = () => {
    
    const navigateTo = useNavigate();

    setTimeout( () => {
        navigateTo('/');
    }, 5000)
    
    return (
        <div className="contenedor__formulario">
            <p className="texto__formulario texto--autenticar">
                Usuario creado exitosamente, por favor, ingrese y complete el registro de su perfil.
            </p>
        </div>
    );
};

export default UserCreate;