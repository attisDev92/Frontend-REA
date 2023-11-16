import CardNotificationCorrectProfile from "../Cards Notificaciones/CardNotificationCorrectProfile";
import CardNotificationWaitingValidation from "../Cards Notificaciones/CardNotificationWaitingValidation";

const CardJuridicoProfile = ({ userData, userDataProfile }) => {

    const renderNotificationProfileStatus = () => {
        if(userDataProfile.correctProfile) { 
            return <CardNotificationCorrectProfile />
        } else if (!userDataProfile.validationProfile) {
            return <CardNotificationWaitingValidation />
        }
    }

    return (
        <div>
            {renderNotificationProfileStatus()}
            <div  className="container__card__profile row" >
                <div className="col">
                    <p className="profile__type">Persona Jurídica</p>
                    <h3 className="profile__company" >{userDataProfile.nombreComercial}</h3>
                    <p className="profile__representante">Representante Legal:</p>
                    <h4 className="profile__name">{userDataProfile.nombreRepresentante} {userDataProfile.apellidoRepresentante}</h4>
                </div>
                <div className="col">
                    <h4>Datos de contacto</h4>
                    <ul>
                        <li>Ciudad: {userDataProfile.ciudad}</li>
                        <li>Provincia: {userDataProfile.provincia}</li>
                        <li>e-mail: {userData.user}</li>
                        <li>Telf: {userDataProfile.telefono}</li>
                        <li>Dirección: {userDataProfile.direccion}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardJuridicoProfile;