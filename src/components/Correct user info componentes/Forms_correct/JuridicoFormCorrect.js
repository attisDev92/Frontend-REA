import { useState, useEffect } from "react";

const JuridicoFormCorrect = ({ userData, showForm, handleClose }) => {

    const  [ classCardForm, setClassCardForm ] = useState(showForm ? 'correct__form' : 'correct__form--none');

    useEffect(() => {
        setClassCardForm(showForm ? 'correct__form' : 'correct__form--none')
    }, [showForm])

    return (
        <div className={classCardForm}>
            <button className="btn" onClick={handleClose}>cerrar</button>
            
        </div>
    )
}

export default JuridicoFormCorrect;