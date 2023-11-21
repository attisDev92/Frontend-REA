import { useState } from "react";
import GestorFormCorrect from "./Forms_correct/GestorFormCorrect";
import Acuerdo from "./Cards_notifiaciones_correciones/Acuerdo";

const GestorCorrect = ({ userData }) => {

    const [ user ] = useState(userData);
    const [ showGestorForm, setShowGestorForm ] = useState(false);
    const [ showAcuerdo, setShowAcuerdo ] = useState(false);

    const handlerRenderCorrectGestor = () => {
        if(user.gestor) {
            if(user.gestorData.correctProfile) {
                return (
                    <div>
                        <p>Su rgistro como Usuario del Banco de Contenidos tiene novedades que deberá corregir</p>
                        <button className='btn' onClick={hadleOpenForm}>Corregir información</button>
                    </div>
                );

            } else if (!user.gestorData.correctProfile && !user.gestorData.validationProfile) {
                return (
                    <div>
                        <p>Su registro como Usuario del Banco de Contenidos no ha sido validado aun</p>
                    </div>
                );

            } else if (user.gestorData.validationProfile && !user.gestorData.acuerdo) {
                return (
                    <div>
                        <p>Debe aceptar el acuerdo de terminos y condiciones para que su  proyecto como gestor sea aprobado</p>
                        <button className='btn' onClick={() => setShowAcuerdo(true)}>Aceptar Acuerdo de Condiciones</button>
                    </div>
                );

            } else if (user.gestorData.acuerdo) {
                return (
                    <div>
                        <p>Su registro como Usuario del Banco de Contenidos ha sido validado</p>
                    </div>
                )
            }

        } else {
            return (
                <div>
                    <p>No tiene un registro como Usuario del Banco de Contenidos</p>
                </div>
            )
        }
    }

    const handleCloseForm = () => {
        setShowGestorForm(false);
    }

    const hadleOpenForm = () => {
        setShowGestorForm(true);
    }

    return (
        <>
            {handlerRenderCorrectGestor()}
            
            <GestorFormCorrect userData={user} showForm={showGestorForm}  handleClose={handleCloseForm} />

            { showAcuerdo ? <Acuerdo userData={user}/> : null}
        </>
    )
}

export default GestorCorrect;