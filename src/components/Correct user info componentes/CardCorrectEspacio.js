import { useState } from "react";
import EspaciosFormCorrect from "./Forms_correct/EspaciosFormCorrect";
import Acuerdo from "./Cards_notifiaciones_correciones/Acuerdo";

const CardCorrectEspacio = ({ userData, espacioData }) => {

    const [ user ] = useState(userData);
    const [ espacio ] = useState(espacioData);
    const [ showEspacioForm, setShowEspacioForm ] = useState(false);
    const [ showAcuerdo, setAcuerdo ] = useState(false);

    const handlerRenderCorrectEspacio = () => {

        if(espacio.correctProfile) {
            return (
                <div>
                    <p>{espacio.nombreEspacio} presenta novedades que debe corregir para ser validado.</p>
                    <button className="btn" onClick={handleOpen}>Corregir información</button>
                </div>
            );

        } else if (!espacio.correctProfile && !espacio.validationProfile) {
            return (
                <div>
                    <p>Su espacio de exhibición no ha sido validado aun</p>
                </div>
            );

        } else if (espacio.validationProfile && !espacio.acuerdo) {
            return (
                <div>
                    <p>Debe aceptar el acuerdo de terminos y condiciones para que su espacio sea aprobado</p>
                    <button className='btn' onClick={() => setAcuerdo(true)}>Aceptar Acuerdo de Condiciones</button>
                </div>
            );

        } else if (espacioData.acuerdo) {
            return <div>Su proyecto de espacio ya esta validado</div>
        }
    }

    const handleClose = () => {
        setShowEspacioForm(false);
    }

    const handleOpen = () => {
        setShowEspacioForm(true);
    }

    return (

        <>
            {handlerRenderCorrectEspacio()}

            <EspaciosFormCorrect userData={user} espacioData={espacio} showForm={showEspacioForm} handleClose={handleClose} />

            {showAcuerdo ? <Acuerdo userData={user} /> : null}
        </>
    )
}

export default CardCorrectEspacio;

