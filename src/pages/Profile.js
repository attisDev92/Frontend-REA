import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import HeaderProfile from "../components/Componentes Profile/Cards profile/HeaderProfile";
import BodyProfile from "../components/Componentes Profile/Cards esp usu/BodyProfile";


const Profile = ({ userData }) => {

	const [ user ] = useState(userData);
	const navigateTo = useNavigate();
	
	if(!user) {
		return navigateTo('login');
	}

	if(user.jurdicoData === null && user.naturalData === null) {
		return navigateTo('/register_profile');
	}

	if(!user.espacio && !user.gestor) {
		return navigateTo('/register_esp_usu')
	}

	return (
			<div className="container__profile">
				<HeaderProfile userData = {user} />
				<hr></hr>
				<BodyProfile userData = {user} />
			</div>
	)
}

export default Profile;