import { useNavigate } from 'react-router-dom';
import FormLogin from '../components/Componentes Login/FormLogin';
import RegisterOption from '../components/Componentes Login/RegisterOption';

const Login = () => {

	const navigateTo = useNavigate();
	const token = localStorage.getItem('signedToken');

	if(token) {
		return navigateTo('/profile');
	}

	return (
		<main className="contenedor__formulario row">
			<FormLogin />
			<RegisterOption />
		</main> 
	)
};

export default Login;