import { useEffect, useState } from "react";

const NaturalFormCorrect = ({ userData, showForm, handleClose }) => {

    const [ classCardForm, setClassCardForm ] = useState(showForm ? 'correct__form' : 'correct__form--none');

    useEffect(() => {
        setClassCardForm(showForm ? 'correct__form' : 'correct__form--none')
    }, [showForm])

    return (
        <div className={classCardForm}>
            <button className="btn" onClick={handleClose}>cerrar</button>
            
            <form >
                <legend>Subsanación de información persona natural</legend>
                
            </form>
        </div>
    );
}

export default NaturalFormCorrect;