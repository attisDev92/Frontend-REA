import { useState } from "react";
import ProfileEspacios from "./ProfileEspacios";
import ProfileGestor from "./ProfileGestor";

const BodyProfile = ({ userData }) => {

    const [ user ] = useState(userData);

    return (
        <div className="body__profile">
            { userData.registerEspacio ? (
                <>
                    <ProfileEspacios /> 
                    <ProfileGestor userData={user} />
                </>
            ):( 
                <>
                    <ProfileGestor userData={user} /> 
                    <ProfileEspacios /> 
                </>
            )}
        </div>
    )
}

export default BodyProfile;