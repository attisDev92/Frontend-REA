import CardNotificationValidEspUsu from "../Cards Notificaciones/CardNotificationValidEspUsu";
import CardNotificationCorrectEspUsu from "../Cards Notificaciones/CardNotificationCorrectEspUsu";

const CardGestor = ({ userData, gestorData }) => {

    const handlerNotification = () => {
        if(!gestorData.validProfile) {
            return < CardNotificationValidEspUsu/>
        } else if (gestorData.correctProfile) {
            return < CardNotificationCorrectEspUsu/>
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