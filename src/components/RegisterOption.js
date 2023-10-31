import { useNavigate } from 'react-router-dom';

const RegisterOption = () => {

	const navigateTo = useNavigate();

	const handlerClick = () => {
		console.log('click en registrarte');
		navigateTo('/register');
	};

	return (
		<div className="contenedor__nuevo-registro col">
			<h3 className="texto__formulario">¿Aún no eres parte de REA?</h3>
			<button onClick={handlerClick} className="btn">Regístrate</button>
			<p className="texto__formulario">Se parte de una red de exhibición y accede a varios beneficios</p>
		</div>
	)
}

export default RegisterOption;