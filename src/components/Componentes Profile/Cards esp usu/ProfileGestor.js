import { useState } from "react";
import CardAddGestor from "./CardAddGestor";
import CardGestor from "./CardGestor";

const ProfileGestor = ({ userData }) => {

    const [ user ] = useState(userData);

    return (
        <div>
            <h4>Usuario registrado</h4>
            {user.gestorData ? (
                <CardGestor userData={user} />
            ) : (
                <CardAddGestor />
            )}
        </div>
    )

}

export default ProfileGestor;