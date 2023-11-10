import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const Profile = ( {userData} ) => {

	const [ user ] = useState(userData);
	const navigateTo = useNavigate();

	useEffect(() => {
		
		if(!user.registerJuridico && !user.registerNatural) {
			return navigateTo('/register_profile');
		}

		if(!user.registerEspacio && !user.registerGestor) {
			return navigateTo('/register_esp_usu');
		}

	}, [])
	


	return (
			<div>
				<h1>Profile</h1>
				{user.user}

				
				<div>

				</div>

			</div>
	)
}

export default Profile;