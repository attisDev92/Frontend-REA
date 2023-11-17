import { useState } from "react";
import CardNotificationCorrectProfile from "../Cards Notificaciones/CardNotificationCorrectProfile";
import CardNotificationWaitingValidation from "../Cards Notificaciones/CardNotificationWaitingValidation";

const CardNaturalProfile = ({ userData }) => {

    const  [ user ] = useState(userData);
    const  { naturalData } = user;
    
    const renderNotificationProfileStatus = () => {
        if(naturalData.correctProfile) { 
            return <CardNotificationCorrectProfile />
        } else if (!naturalData.validationProfile) {
            return <CardNotificationWaitingValidation />
        } else {
            return <></>
        }
    }

    return (
        <div>
            {renderNotificationProfileStatus()}
            <div className="container__card__profile row">
                <div className="col">
                    <p className="profile__type">Persona Natural</p>
                    <h3 className="profile__name">{user.nombre} {user.apellido}</h3>
                    <hr></hr>
                    <p>{naturalData.perfilProfesional}</p>
                </div>
                <div className="col">
                    <h3>Datos de Contacto:</h3>
                    <ul>
                        <li>Ciudad: {user.ciudad}</li>
                        <li>Provincia: {user.provincia}</li>
                        <li>e-mail: {user.user}</li>
                        <li>Telf: {user.telefono}</li>
                        <li>Dirección: {user.direccion}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardNaturalProfile;