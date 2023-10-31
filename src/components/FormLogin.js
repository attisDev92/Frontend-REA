import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services";

const FormLogin = () => {

	const [ user, setUser ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorMessageUser, setMessageEmptyUser ] = useState('alert--none');
	const [ errorMessagePassword, setErrorMessagePassword ] = useState('alert--none');
	const [ errorMessageLogin, setErrorMessageLogin ] = useState('alert--none')
	const [ userData, setUserData ] = useState({});
  
	const navigateTo = useNavigate();
  
	const handlerOnSubmit = (e) => {
		e.preventDefault();

		const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

		if(!user || !user.match(regexMail)) {
			return setMessageEmptyUser('alert');
		} else {
			setMessageEmptyUser('alert--none');
		}

		if(!password || !password.match(regexPassword)) {
			return setErrorMessagePassword('alert');
		} else {
			setErrorMessagePassword('alert--none');
		}

		const userObject = {
			user: user,
			password: password
		}

		login(userObject)
			.then(response => {
			setErrorMessageLogin('alert--none');
			setUserData(response);
			console.log(userData);
			debugger

			if(userData.auth === false) {
				alert('Debe ingresar a su mail y autenticar su registro antes de volver a ingresar');
				return navigateTo('/validation_mail');
			}

			if(userData.juridico === false && userData.natural === false) navigateTo('/register_profile');

			return navigateTo('/profile');

			})
			.catch(err => {
			console.error(err)
			setErrorMessageLogin('alert');
			})
  
	};
  
	const handlerClickForget = (e) => {
	  e.preventDefault();
	  console.log( "clic en olvido pass");
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
  