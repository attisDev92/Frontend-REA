import { useState, useEffect } from "react";
import { getInformation } from "../../../services";
import CardJuridicoProfile from "./CardJuridicoProfile";
import CardNaturalProfile from "./CardNaturalProfile";

const HeaderProfile = ({ userData }) => {
    
    const [ user ] = useState(userData);
    const [ userDataProfile, setUserDataProfile ] = useState({});
    const [ loaded, setLoaded ] = useState(false); // Estado para indicar si los datos se han cargado.
    const token = localStorage.getItem('signedToken');

    useEffect(() => {
        // Función para cargar los datos de perfil según el tipo de usuario.
        const loadUserProfileData = async () => {
            try {
                let response = null;

                if (user.juridico) {
                    response = await getInformation.getJuridico(token);
                } else if (user.natural) {
                    response = await getInformation.getNatural(token);
                }

                if (response) {
                    setUserDataProfile(response.data);
                    setLoaded(true); // Marcamos que los datos se han cargado.
                }
            } catch (err) {
                console.error(err);
                // Manejar errores si es necesario.
            }
        };

        loadUserProfileData();
    }, [user.juridico, user.natural, token]);

    return (
        <section className="profile__header">
            {loaded ? (
                user.juridico ? ( <CardJuridicoProfile userData={user} userDataProfile={userDataProfile} />) 
                : user.natural ? 
                ( <CardNaturalProfile userData={user} userDataProfile={userDataProfile} />) 
                : ( null)
            ) : (
                <p>Cargando datos...</p>
            )}
        </section>
    );
};

export default HeaderProfile;
