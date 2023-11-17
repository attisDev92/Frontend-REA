
import { useState } from "react";
import CardAddEspacio from "./CardAddEspacio";
import CardEspacio from "./CardEspacio";

const ProfileEspacios = ({ userData }) => {

    const [ user ] = useState(userData);
    const { espaciosData } = user;

    console.log(espaciosData);

    return (
        <div>
             <h4>Espacios registrdos:</h4>
            { espaciosData.map(espacio => (
                <CardEspacio espacio = {espacio} />
            ))}           
            <CardAddEspacio />
        </div>
    )
}

export default ProfileEspacios;