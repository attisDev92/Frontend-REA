import FormLogin from '../components/Componentes Login/FormLogin';
import RegisterOption from '../components/Componentes Login/RegisterOption';

const Login = () => {

	return (
		<main className="contenedor__formulario row">
			<FormLogin />
			<RegisterOption />
		</main> 
	)
};

export default Login;