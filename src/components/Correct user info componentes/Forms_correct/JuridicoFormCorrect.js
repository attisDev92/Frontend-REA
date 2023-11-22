import { useState, useEffect } from "react";

const JuridicoFormCorrect = ({ userData, showForm, handleClose }) => {

    const [ user ] = useState(userData);
    const [ classCardForm, setClassCardForm ] = useState(showForm ? 'correct__form' : 'correct__form--none');


    useEffect(() => {
        setClassCardForm(showForm ? 'correct__form' : 'correct__form--none')
    }, [showForm])

    return (
        <div className={classCardForm}>
            <button className="btn btn--cerrar" onClick={handleClose}>cerrar</button>
            
            <form >
                <legend>Subsanación de información persona jurídica</legend>

                <p><strong>Comentario de la revisión:</strong>      {user.naturalData.commentValidation}</p>
                <hr></hr>

                { !user.validNombreComercial ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-3" htmlFor="nombreComercial">Nombre de la organización:</label>
                        <input className="col-4" type="text" name="nombreComercial" id="nombreComercial" placeholder="Ingrese el nombre corregido" required/>
                    </div>
                ):(
                    null
                )}

                <hr></hr>

                { !user.validNombre ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="nombre"><strong>Nombres representante:</strong> {user.nombre}</label>
                        <input className="col-4" type="text" name="nombre" id="nombre" placeholder="Ingrese los nombres corregido" required/>
                    </div>
                ):(
                    null
                )}

                <hr></hr>

                { !user.validApellido ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="apellido"><strong>Apellidos:</strong> {user.apellido}</label>
                        <input className="col-4" type="text" name="apellido" id="apellido" placeholder="Ingrese los apellidos corregido" required/>
                    </div>
                ):(
                    null
                )}

                <hr></hr>

                { !user.validTelefono ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="telefono"><strong>Teléfono:</strong> {user.telefono}</label>
                        <input className="col-4" type="tel" name="telefono" id="telefono" placeholder="Ingrese el teléfono corregido" required/>
                    </div>
                ):(
                    null
                )}

                <hr></hr>

                { !user.validCiudad ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="ciudad"><strong>Ciudad:</strong> {user.ciudad}</label>
                        <input className="col-4" type="text" name="ciudad" id="ciudad" placeholder="Ingrese la ciudad corregida" required/>
                    </div>
                ):(
                    null
                )}

                <hr></hr>

                { !user.validProvincia ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4"><strong>Provincia:</strong> {user.provincia}</label>
                        <select className="col-4" name="provincia" id="provincia" required>
                            <option value="">Selecciona una provincia</option>
                            <option value="Azuay">Azuay</option>
                            <option value="Bolivar">Bolívar</option>
                            <option value="Cañar">Cañar</option>
                            <option value="Carchi">Carchi</option>
                            <option value="Chimborazo">Chimborazo</option>
                            <option value="Cotopaxi">Cotopaxi</option>
                            <option value="El Oro">El Oro</option>
                            <option value="Esmeraldas">Esmeraldas</option>
                            <option value="Galapagos">Galápagos</option>
                            <option value="Guayas">Guayas</option>
                            <option value="Imbabura">Imbabura</option>
                            <option value="Loja">Loja</option>
                            <option value="Los Rios">Los Ríos</option>
                            <option value="Manabí">Manabí</option>
                            <option value="Morona Santiago">Morona Santiago</option>
                            <option value="Napo">Napo</option>
                            <option value="Orellana">Orellana</option>
                            <option value="Pastaza">Pastaza</option>
                            <option value="Pichincha">Pichincha</option>
                            <option value="Santa Elena">Santa Elena</option>
                            <option value="Santo Domingo de los Tsáchilas">Santo Domingo de los Tsáchilas</option>
                            <option value="Sucumbios">Sucumbíos</option>
                            <option value="Tungurahua">Tungurahua</option>
                            <option value="Zamora Chinchipe">Zamora Chinchipe</option>
                        </select>
                    </div>
                ):(
                    null
                )}

                <hr></hr>

                { !user.validDireccion ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="direccion"><strong>Dirección:</strong> {user.direccion}</label>
                        <input className="col-4" type="text" name="direccion" id="direccion" placeholder="Ingrese la dirección corregida" required/>
                    </div>
                ):(
                    null
                )}

                <hr></hr>

                { !user.validImgDir ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="imgDir">Documento que respalde la dirección: </label>
                        <input className="col-4" type="file" name="imgDir" id="imgDir" accept=".pdf, .jpg" required/>
                    </div>
                ):(
                    null
                )}

                <hr></hr>

                { !user.validImgRuc ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="imgRuc">Ruc escaneado</label>
                        <input className="col-4" type="file" name="imgRuc" id="imgRuc" accept=".pdf, .jpg" required />
                    </div>
                ):(
                    null
                )}

                <input className="btn correct__enviar" value='Enviar información corregida'/>
            </form>
        </div>
    )
}

export default JuridicoFormCorrect;