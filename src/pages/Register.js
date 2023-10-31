import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services';


const Register = () => {

    const [ user, setUser ] = useState('');
    const [ userCedula, setUserCedula ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorMessageUser, setErrorMessageUser ] = useState('alert--none');
	const [ errorMessagePassword, setErrorMessagePassword ] = useState('alert--none');
	const [ errorMessageCedula, setMessageCedula ] = useState('alert--none');
    const [ errorMessage400, setErrorMessage400 ] = useState('alert--none');
    const [ errorMessage403, setErrorMessage403 ] = useState('alert--none');

    const navigateTo = useNavigate();

	const handlerOnSubmit = (e) => {
		e.preventDefault();

		const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        const regexCedula = /^(\d{10}|\d{13})$/;

		if(!user || !user.match(regexMail)) setErrorMessageUser('alert');
        if (!userCedula.match(regexCedula)) setMessageCedula('alert');
		if(!password || !password.match(regexPassword)) setErrorMessagePassword('alert');

		const newUser = {
			user: user,
            cedula: userCedula,
			password: password,
		}

        register(newUser)
            .then(response => {
                console.log(response);
                setTimeout( navigateTo('/validation_mail'), 5000);              
            })
            .catch(err => {
                if( err.response.status === 403) setErrorMessage403('alert');
                if( err.response.status === 400) setErrorMessage400('alert');
            })

        setErrorMessageUser('alert--none');
        setMessageCedula('alert--none');
        setErrorMessagePassword('alert--none');
        setErrorMessage400('alert--none');
        setErrorMessage403('alert--none');
	};

    return (
        <form className="login__formulario contenedor__formulario" onSubmit={handlerOnSubmit}>

            <fieldset>

                <legend className="formulario__titulo">Registro de usuario
                </legend>

                <label htmlFor="mail-usuario" className="texto__formulario">
                    Ingrese su correo electrónico 
                </label>
                <input type="email" name="mail" id="mail-usuario" placeholder="correo electrónico" onChange={ e => setUser(e.target.value)} />
                <p className="notas">
                    Este mail será su nombre de usaurio y será la única forma de ingresar a su cuenta de usuario.
                </p>
                <span className={ errorMessageUser }>
                    Debe colocar una dirección de correo electrónico válida
			    </span>

                <label htmlFor="identidad" className="texto__formulario">
                    Ingrese un númer de cédula o ruc
                </label>
                <input type="number" name="identificación" id="identidad" placeholder="Cédula o RUC" onChange={ e => setUserCedula(e.target.value)} />
                <span className={ errorMessageCedula }>
				    Debe colocar un número de cédula o ruc válido de 10 o 13 dígitos.
			    </span>

                <label htmlFor="pass" className="texto__formulario">
                    Ingrese su contraseña
                </label>
                <input type="password" name="pass" id="pass" placeholder="Contraseña" onChange={ e => setPassword(e.target.value)} />
                
                <p className="notas">
                    Debe tener un mínimo de 8 caracteres y como mínimo debe contener un número y una mayúscula
                </p>
                <span className={ errorMessagePassword }>
                    El password debe ser válido, contener alemenos 8 caracteres e incluir una letra mayúscula y un número
			    </span>

                <input id="btn-registrar" className="btn" type="submit" value="Registrar usuario" />

                <span className={ errorMessage400 }>
                    Ya existe un usuario registrado con su número de identificación
			    </span>
                <span className={ errorMessage403 }>
                    Ya se encuentra registrado un usuario con el mismo correo electrónico
			    </span>

            </fieldset>
        </form>
    );
};

export default Register;