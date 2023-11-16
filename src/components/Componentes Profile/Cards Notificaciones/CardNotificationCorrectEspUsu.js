import { useNavigate } from "react-router-dom";

const CardNotificationCorrectEspUsu = () => {

    const navigateTo = useNavigate();

    return (
        <div className="card__notification">
            <p className="notification__text">Debe corregir la informacion para ser validado</p>
            <button onClick={() => navigateTo('/correct_register')}>Corregir información</button>
        </div>
    )
}

export default CardNotificationCorrectEspUsu;