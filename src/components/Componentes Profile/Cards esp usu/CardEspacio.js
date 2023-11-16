import CardNotificationValidEspUsu from "../Cards Notificaciones/CardNotificationValidEspUsu";
import CardNotificationCorrectEspUsu from "../Cards Notificaciones/CardNotificationCorrectEspUsu";

const CardEspacio = ({ espacioData }) => {

    console.log(espacioData);
    const handlerNotification = () => {
        if(espacioData.correctProfile) {
            return < CardNotificationCorrectEspUsu />
        } else if (!espacioData.validProfile) {
            return < CardNotificationValidEspUsu />
        }
    }

    return (
        <div className="container__card__espacio container">
            <div className="row">
                <img className="col 2" src={espacioData.imgLogo} alt="Imagen Logo del Espacio"></img>
                <div className="col">
                    <p>Espacio de exhibición</p>
                    <h2>{espacioData.nombreEspacio}</h2>
                    <p>Responsable del espacio:</p>
                    <h3>{espacioData.nombreResponsable}</h3>
                    <p>{espacioData.cargoResponsable}</p>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <p>{espacioData.descripcion}</p>
            </div>
            <hr></hr>
            <div className="row">
                <ul className="col">
                    <li>Tipo de espacio: {espacioData.tipoDeEspacio}</li>
                    <li>{espacioData.publicoPrivado}</li>
                    <li>Ciudad: {espacioData.ciudad}</li>
                    <li>Provincia: {espacioData.provincia}</li>
                    <li>Otros servicios: {!espacioData.otrosServicios ? 'No hay otros servicios' : espacioData.otrosServicios}</li>
                </ul>
                <ul className="col">
                    <li>Celular: {espacioData.celularResponsable}</li>
                    <li>e-mail: {espacioData.mailResponsable}</li>
                    <li>Dirección: {espacioData.direccionEspacio}</li>
                </ul>
                <ul className="col">
                    <li>Aforo: {espacioData.aforo}</li>
                    <li>Equipo de proyección: {espacioData.equipoProyeccion.split(',').join(', ')}</li>
                    <li>Equipo de reproducción: {espacioData.equipoReproductor.split(',').join(', ')}</li>
                    <li>Equipo de audio: {espacioData.equipoAudio}</li>
                </ul>
            </div>
            {handlerNotification()}          
        </div> 
    )
}

export default CardEspacio;