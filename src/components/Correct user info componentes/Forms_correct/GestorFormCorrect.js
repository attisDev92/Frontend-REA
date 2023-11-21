import { useState, useEffect } from "react";

const GestorFormCorrect = ({ userData, showForm, handleClose }) => {

    const [ classCardForm, setClassCardForm ] = useState(showForm ? 'correct__form' : 'correct__form--none');

    useEffect(() => {
        setClassCardForm(showForm ? 'correct__form' : 'correct__form--none')
    }, [showForm])

    return (
        <div className={classCardForm}>
            <button onClick={handleClose}>cerrar</button>
            
            Componente correct gestor info
        </div>
    )
}

export default GestorFormCorrect;