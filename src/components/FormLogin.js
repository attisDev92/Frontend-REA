import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService, getInformation } from "../services";
import validationsForm from "../lib/validationsForm";

const FormLogin = () => {

	const [ user, setUser ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorMessageUser, setMessageEmptyUser ] = useState('alert--none');
	const [ errorMessagePassword, setErrorMessagePassword ] = useState('alert--none');
	const [ errorMessageLogin, setErrorMessageLogin ] = useState('alert--none')
  
	const navigateTo = useNavigate();
  
	const handlerOnSubmit = (e) => {
		e.preventDefault();

		setMessageEmptyUser('alert--none');
		setErrorMessagePassword('alert--none');

		if(!validationsForm.validMail('usuario')) {
			return setMessageEmptyUser('alert');
		}

		if(!validationsForm.validPassword('password')) {
			return setErrorMessagePassword('alert');
		}

		const userObject = {
			user: user,
			password: password
		}
		
		userService.login(userObject)
			.then(response => {
				setErrorMessageLogin('alert--none');
				
				const { signed,  userData } = response;
				localStorage.setItem('signedToken', signed);

				if(!userData.registerJuridico && !userData.registerNatural) {
					return navigateTo('./register_profile');
				}

				if(!userData.registerEspacio && !userData.registerGestor) {
					return navigateTo('/register_esp_usu');
				}

				return navigateTo('/profile');
			
			})
			.catch(err => {
				console.error(err)
				setErrorMessageLogin('alert');
			})

	};
  
	const handlerClickForget = (e) => {
	  	e.preventDefault();
	  	navigateTo('/resetPassword');
	};
  
	return (
	  <form className="login__formulario col" onSubmit={handlerOnSubmit}>
  
		<legend className="formulario__titulo">Ingreso REA</legend>
  
		<span className={ errorMessageLogin }>
		  El mail o la contraseña son invalidos
		</span>
		<input type="email" name="user" id="usuario" placeholder="Correo electrónico" onChange={ e => setUser(e.target.value)}/>
		<span className={ errorMessageUser }>
		  Debe colocar una dirección de correo electrónico válida
		</span>
  
		<input type="password" name="password" id="password" placeholder="Contraseña" onChange={ e => setPassword(e.target.value)}/>
		<span className={ errorMessagePassword }>
		  El password debe ser válido, contener alemenos 8 caracteres e incluir una letra mayúscula y un número
		</span>
  
		<input className="btn" type="submit" value="Ingresar" />
		<br />
  
		<button onClick={handlerClickForget} className="btn">
		  ¿Olvidó la contraseña?
		</button>
  
	  </form>
	)
  }
  
  export default FormLogin;
  