import { useState } from 'react';

const ResetPassword = () => {

    const [ user, setUser ] = useState('');
    const [ userCedula, setUserCedula ] = useState('');
    const [ errorMessageUser, setMessageEmptyUser ] = useState('alert--none');
	const [ errorMessageCedula, setMessageCedula ] = useState('alert--none');

    const handlerOnSubmit = (e) => {

        e.preventDefault();

        const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexCedula = /^(\d{10}|\d{13})$/;



        if(!user || !user.match(regexMail)) {
			setMessageEmptyUser('alert');
            return
		} else {
			setMessageEmptyUser('alert--none');
		}

        if (!userCedula.match(regexCedula)) {
            setMessageCedula('alert');
            return
        } else {
            setMessageCedula('alert--none');
        }



        const userObject = {
            user: user,
            cedula: userCedula,
        }

        console.log(userObject);
    }

    return (

        <form className="login__formulario contenedor__formulario" onSubmit={handlerOnSubmit}>

            <fieldset>
                <legend className="formulario__titulo">Recuperación de contraseña</legend>

                <label htmlFor="mail-usuario" className="texto__formulario">
                    Ingrese el mail con el que se encuentra registrado.
                </label>
                <input type="email" name="mail" id="mail-usuario" placeholder="correo electrónico" onChange={ e => setUser(e.target.value)} />
                <span className={ errorMessageUser }>
				    Debe colocar una dirección de correo electrónico válida
			    </span>
                
                <label htmlFor="identidad" className="texto__formulario">
                    Ingrese su cédula o RUC con el que se encuentra registrado.
                </label>
                <input type="number" name="identificación" id="identidad" placeholder="Cédula o RUC" onChange={ e => setUserCedula(e.target.value)} />
                <span className={ errorMessageCedula }>
				    Debe colocar un número de cédula o ruc válido de 10 o 13 dígitos.
			    </span>
                
                <input className="btn" type="submit" value="Recuperar contraseña" />

                <p className="texto__formulario">Se enviará al mail registrado su contraseña.</p>
            </fieldset>
        </form>

    );
};

export default ResetPassword;
