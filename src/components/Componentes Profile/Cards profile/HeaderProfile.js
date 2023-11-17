import { useState } from "react";
import CardJuridicoProfile from "./CardJuridicoProfile";
import CardNaturalProfile from "./CardNaturalProfile";

const HeaderProfile = ({ userData }) => {
    
    const [ user ] = useState(userData);

    return (
        <section className="profile__header">
            {user.juridico ? ( 
                <CardJuridicoProfile userData={user} />
            ) : user.natural ? ( 
                <CardNaturalProfile userData={user} />) 
            : ( 
                null
            )}
        </section>
    );
};

export default HeaderProfile;
