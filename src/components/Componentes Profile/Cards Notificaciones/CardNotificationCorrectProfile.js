import { useNavigate } from "react-router-dom";

const CardNotificationCorrectProfile = () => {

    const navigateTo = useNavigate();

    return (
        <div className="card__notification">
            <p className="notification__text">Debe corregir su perfil para poder ser validado</p>
            <button onClick={() => navigateTo('/correct_register')}>Corregir información</button>
        </div>
    )
}

export default CardNotificationCorrectProfile;