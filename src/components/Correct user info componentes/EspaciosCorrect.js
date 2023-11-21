import { useState } from "react"
import CardCorrectEspacio from "./CardCorrectEspacio"

const EspaciosCorrect = ({ userData }) => {

    const [ user ] =useState(userData)

    const handlerRenderCorrectEspacios = () => {
        if (user.espacio) {
            return user.espaciosData.map(espacio => (
                <CardCorrectEspacio espacioData={espacio} userData={user} />
            ))
        } else {
            return (
                <div>
                    <p>No tiene espacios de exhibición registrados</p>
                </div>
            )
        } 
    }

    return (
        <>
            {handlerRenderCorrectEspacios()}
        </>
    )
}

export default EspaciosCorrect;