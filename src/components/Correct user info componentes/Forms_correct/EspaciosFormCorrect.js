import { useState, useEffect } from "react";

const EspaciosFormCorrect = ({userData, espacioData, showForm, handleClose }) => {

    const [ user ] = useState(userData);
    const [ espacio ] = useState(espacioData);
    const [ classCardForm, setClassCardForm ] = useState(showForm ? 'correct__form' : 'correct__form--none');

    useEffect(() => {
        setClassCardForm(showForm ? 'correct__form' : 'correct__form--none')
    }, [showForm])

    return (
        <div className={classCardForm}>
            <button onClick={handleClose}>cerrar</button>
            
            Componente correct espacio info
        </div>
    )
}

export default EspaciosFormCorrect;