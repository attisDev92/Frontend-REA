import { useNavigate } from "react-router-dom";

const Validation = () => {
    
    const navigateTo = useNavigate();

    setTimeout( () => {
        navigateTo('/');
    }, 10000)
    
    return (
        <div className="contenedor__formulario">
            <p className="texto__formulario texto--autenticar">
                Por favor, ingrese a su correo electrónico para realizar la validación del mismo. Una vez realizado este proceso, podrá ingresar con su dirección y contraseña y continuar con el proceso de registro de espacios o usuarios REA.
            </p>
        </div>
    );
};

export default Validation;