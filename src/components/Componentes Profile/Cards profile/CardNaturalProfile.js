import CardNotificationCorrectProfile from "../Cards Notificaciones/CardNotificationCorrectProfile";
import CardNotificationWaitingValidation from "../Cards Notificaciones/CardNotificationWaitingValidation";

const CardNaturalProfile = ({ userData, userDataProfile }) => {
    
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
            <div className="container__card__profile row">
                <div className="col">
                    <p className="profile__type">Persona Natural</p>
                    <h3 className="profile__name">{userDataProfile.nombre} {userDataProfile.apellido}</h3>
                    <hr></hr>
                    <p>{userDataProfile.perfilProfesional}</p>
                </div>
                <div className="col">
                    <h3>Datos de Contacto:</h3>
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

export default CardNaturalProfile;