import { useEffect, useState } from "react";
import { getInformation } from "../../../services";
import CardAddGestor from "./CardAddGestor";
import CardGestor from "./CardGestor";

const ProfileGestor = ({ userData }) => {

    const [ user ] = useState(userData);
    const [ userDataGestor, setUserDataGestor ] = useState({});
    const [ loaded, setLoaded ] = useState(false);
    const token = localStorage.getItem('signedToken');
  
    useEffect(() => {
        const loadUserGestorData = async () => {
            try {
                const response = await getInformation.getGestor(token);
                if(response) {
                    setUserDataGestor(response.data);
                    setLoaded(true);
                }
            } catch (err) {
                console.error(err);
            }
        };

        loadUserGestorData();
    }, [token])

    return (
        <div>
            <h4>Usuario registrado</h4>
            {loaded ? (
                <CardGestor userData={user} gestorData={userDataGestor} />
            ) : (
                <CardAddGestor />
            )}
        </div>
    )

}

export default ProfileGestor;