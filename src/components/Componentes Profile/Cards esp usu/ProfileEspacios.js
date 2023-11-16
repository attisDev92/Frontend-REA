
import { useEffect, useState } from "react";
import CardAddEspacio from "./CardAddEspacio";
import CardEspacio from "./CardEspacio";
import { getInformation } from "../../../services";

const ProfileEspacios = () => {

    const [ userEspaciosData, setUserEspaciosData ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    
    const token = localStorage.getItem('signedToken');

    useEffect(() => {
        const loadUserEspaciosData = async () => {
            try{
                const response = await getInformation.getEspacios(token);
                if(response) {
                    setUserEspaciosData(response.data);
                    setLoaded(true);
                }
            } catch (err) {
                console.error(err);
            }
        };

        loadUserEspaciosData();
    }, [token])

    return (
        <div>
             <h4>Espacios registrdos:</h4>
            { loaded ? (
                userEspaciosData.map(espacio => (
                    <CardEspacio espacioData={espacio} /> 
                ))
            ) : (
                null
            )}
            <CardAddEspacio />
        </div>
    )
}

export default ProfileEspacios;