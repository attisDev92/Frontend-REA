import { useState } from "react";
import ProfileEspacios from "./ProfileEspacios";
import ProfileGestor from "./ProfileGestor";

const BodyProfile = ({ userData }) => {

    const [ user ] = useState(userData);

    return (
        <div className="body__profile">
            { user.espacio ? (
                <>
                    <ProfileEspacios userData={user} />
                    <ProfileGestor userData={user} />
                </>
            ):( 
                <>
                    <ProfileGestor userData={user} />
                    <ProfileEspacios userData={user} />
                </>
            )}
        </div>
    )
}

export default BodyProfile;