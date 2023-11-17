import { useState } from "react";
import CardNotificationCorrectProfile from "../Cards Notificaciones/CardNotificationCorrectProfile";
import CardNotificationWaitingValidation from "../Cards Notificaciones/CardNotificationWaitingValidation";

const CardJuridicoProfile = ({ userData }) => {

    const [ user ] = useState(userData);
    const  { juridicoData } = user;

    const renderNotificationProfileStatus = () => {
        if(juridicoData.correctProfile) { 
            return <CardNotificationCorrectProfile />
        } else if (!juridicoData.validationProfile) {
            return <CardNotificationWaitingValidation />
        } else {
            return <></>
        }
    }

    return (
        <div>
            {renderNotificationProfileStatus()}
            <div  className="container__card__profile row" >
                <div className="col">
                    <p className="profile__type">Persona Jurídica</p>
                    <h3 className="profile__company" >{user.nombreComercial}</h3>
                    <p className="profile__representante">Representante Legal:</p>
                    <h4 className="profile__name">{user.nombre} {user.apellido}</h4>
                </div>
                <div className="col">
                    <h4>Datos de contacto</h4>
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

export default CardJuridicoProfile;