import { useState } from "react";
import NaturalFormCorrect from "./Forms_correct/NaturalFormCorrect";
import JuridicoFormCorrect from "./Forms_correct/JuridicoFormCorrect";


const ProfileCorrect = ({ userData }) => {

    const [ user ] = useState(userData);
    const [ showJuridicoForm, setShowJuridicoForm ] = useState(false);
    const [ shownNaturalForm, setShowNaturalForm ] = useState(false);

    const handlerRenderCorrectProfile = () => {
        if(user.juridico) {
            if(user.juridicoData.correctProfile) {
                return (
                    <div>
                        <p>Su perfil jurídico tiene novedades que deberá corregir. </p>
                        <button className='btn' onClick={handleOpenJuridicoForm}>Corregir información</button>
                    </div>
                );

            } else if (!user.juridicoData.correctProfile && !user.juridicoData.validationProfile) {
                return (
                    <div>
                        <p>Su información como persona jurídica aún no ha sido validada.</p>
                    </div>
                );

            } else if (user.juridicoData.validationProfile) {
                return (
                    <div>
                        <p>Su perfil ya fue validado</p>
                    </div>
                );
            }

        } else if (user.natural) {
            if(user.naturalData.correctProfile) {
                return (
                    <div>
                        <p>Su perfil de persona natural tiene novedades que deberá corregir.</p>
                        <button className='btn' onClick={handleOpenNaturlForm}>Corregir información</button>
                    </div>
                );

            } else if (!user.naturalData.correctProfile && !user.naturalData.validationProfile) {
                return (
                    <div>
                        <p>Su información como persona natural aun no ha sido validada.</p>
                    </div>
                )
            } else if (user.naturalData.validationProfile) {
                return (
                    <div>
                        <p>Su perfil ya fue validado</p>
                    </div>
                );
            }
        }
    }

    const handleCloseNaturalForm = () => {
        setShowNaturalForm(false);
    }

    const handleOpenNaturlForm = () => {
        setShowNaturalForm(true);
    }

    const handleCloseJuridicoForm = () => {
        setShowJuridicoForm(false);
    }

    const handleOpenJuridicoForm = () => {
        setShowJuridicoForm(true);
    }

    return (
        <>
            {handlerRenderCorrectProfile()}

            <NaturalFormCorrect userData={user} showForm={shownNaturalForm} handleClose={handleCloseNaturalForm} />

            <JuridicoFormCorrect userData={user} showForm={showJuridicoForm} handleClose={handleCloseJuridicoForm} />
        </>
    )
}

export default ProfileCorrect;