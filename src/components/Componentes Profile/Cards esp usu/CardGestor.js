import CardNotificationValidEspUsu from "../Cards Notificaciones/CardNotificationValidEspUsu";
import CardNotificationCorrectEspUsu from "../Cards Notificaciones/CardNotificationCorrectEspUsu";

const CardGestor = ({ userData }) => {

    const { gestorData } = userData;

    const handlerNotification = () => {
        if(!gestorData.validationProfile) {
            return < CardNotificationValidEspUsu/>
        } else if (gestorData.correctProfile) {
            return < CardNotificationCorrectEspUsu/>
        } else {
            return <></>
        }
    }

    return (
        <div className="row container__card__espacio">
            <img className="col-2" src={gestorData.imgFotoLogo} alt="Imagen del Gestor"></img>
            <div className="col">
                <p>Usuario del Banco de Contenidos</p>
                <h4>Proyecto de exhibición</h4>
                <p>{gestorData.proyecto}</p>
            </div>
            {handlerNotification()}
        </div>
    )
}

export default CardGestor;