import CardNotificationValidEspUsu from "../Cards Notificaciones/CardNotificationValidEspUsu";
import CardNotificationCorrectEspUsu from "../Cards Notificaciones/CardNotificationCorrectEspUsu";

const CardEspacio = ({ espacio }) => {

    const handlerNotification = () => {
        if(espacio.correctProfile) {
            return < CardNotificationCorrectEspUsu />
        } else if (!espacio.validationProfile) {
            return < CardNotificationValidEspUsu />
        } else {
            return <></>
        }
    }

    return (
        <div className="container__card__espacio container">
            <div className="row">
                <img className="col 2" src={espacio.imgLogo} alt="Imagen Logo del Espacio"></img>
                <div className="col">
                    <p>Espacio de exhibición</p>
                    <h2>{espacio.nombreEspacio}</h2>
                    <p>Responsable del espacio:</p>
                    <h3>{espacio.nombreResponsable}</h3>
                    <p>{espacio.cargoResponsable}</p>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <p>{espacio.descripcion}</p>
            </div>
            <hr></hr>
            <div className="row">
                <ul className="col">
                    <li>Tipo de espacio: {espacio.tipoDeEspacio}</li>
                    <li>{espacio.publicoPrivado}</li>
                    <li>Ciudad: {espacio.ciudad}</li>
                    <li>Provincia: {espacio.provincia}</li>
                    <li>Otros servicios: {!espacio.otrosServicios ? 'No hay otros servicios' : espacio.otrosServicios}</li>
                </ul>
                <ul className="col">
                    <li>Celular: {espacio.celularResponsable}</li>
                    <li>e-mail: {espacio.mailResponsable}</li>
                    <li>Dirección: {espacio.direccionEspacio}</li>
                </ul>
                <ul className="col">
                    <li>Aforo: {espacio.aforo}</li>
                    <li>Equipo de proyección: {espacio.equipoProyeccion}</li>
                    <li>Equipo de reproducción: {espacio.equipoReproductor}</li>
                    <li>Equipo de audio: {espacio.equipoAudio}</li>
                </ul>
            </div>
            {handlerNotification()}          
        </div> 
    )
}

export default CardEspacio;