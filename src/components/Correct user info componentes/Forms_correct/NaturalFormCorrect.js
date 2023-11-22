import { useEffect, useState } from "react";
import validationsForm from "../../../lib/validationsForm";
import  { updateUser } from "../../../services"

const NaturalFormCorrect = ({ userData, showForm, handleClose }) => {
    const [ user ] = useState(userData);
    const [ classCardForm, setClassCardForm ] = useState(showForm ? 'correct__form' : 'correct__form--none');
    const [ loader, setLoader ] = useState('loaded');
    const [ showInputsDatos, setShowInputsDatos ] = useState('correct__form--visible');
    const [ showDatosUpdated, setShowDatosUpdated ] = useState('notification__updated--none');
    const [ showInputImgDir, setShowInputImgDir ] = useState('correct__form--visible');
    const [ showImgDirUpdated, setShowImgDirUpdated ] = useState('notification__updated--none');
    const token = localStorage.getItem('signedToken');

    useEffect(() => {
        setClassCardForm(showForm ? 'correct__form' : 'correct__form--none')
    }, [showForm])

    const handlerOnSubmit = (e) => {
        e.preventDefault();
        setLoader('loader-section');

        const formData = new FormData();
        formData.append('nombre', document.getElementById('nombre') ? validationsForm.upperCaseWords('nombre') : '' );
        formData.append('apellido', document.getElementById('apellido') ? validationsForm.upperCaseWords('apellido') : '' );
        formData.append('direccion', document.getElementById('direccion') ? document.getElementById('direccion').value : '');
        formData.append('provincia', document.getElementById('provincia') ? document.getElementById('provincia').value : '');
        formData.append('ciudad', document.getElementById('ciudad') ? validationsForm.upperCaseWords('ciudad') : '' );
        formData.append('telefono', document.getElementById('telefono') ? document.getElementById('telefono').value : '');
        formData.append('perfilProfesional', document.getElementById('perfilProfesional') ? document.getElementById('perfilProfesional').value : '');

        const objectFormData = {};

        formData.forEach((value, key) => {
            objectFormData[key] = value;
        })

        const user = Object.fromEntries(
            Object.entries(objectFormData).filter(([key, value]) => value !== '')
        );
        
        updateUser.updateProfileData(user, token)
            .then ( response => { 
                    setShowInputsDatos('notification__updated--none');
                    setShowDatosUpdated('notification__updated');
                    setLoader('loaded');
            })
            .catch (err => {
                console.error(err)
                setLoader('loaded');
            })
    }

    const handlerOnSubmitImgDir = (e) => {
        e.preventDefault();

        setLoader('loader-section');

        const formData = new FormData();
        formData.append('imgDir', document.getElementById('imgDir').files[0]);

        console.log('se actualizo el archivo');
        setShowInputImgDir('notification__updated--none');
        setShowImgDirUpdated('notification__updated');
        setLoader('loaded');
    }

    const handleUpdatedInfo = () => {
        console.log('dio click en validaar información')
    }
    
    return (
        <div className={classCardForm}>
            <button className="btn btn--cerrar " onClick={handleClose}>atrás</button>

            <div className={loader}>
				<span className="loader"></span>
			</div>

            <h4>Subsanación de información persona natural</h4>

            <div className="validation--comment">
                <p><strong>Comentario de la revisión:</strong>      {user.naturalData.commentValidation}</p>
            </div>

            <div className={showDatosUpdated}>
                <p>Se actualizó la información</p>
            </div>
            
            <form className={showInputsDatos} onSubmit={handlerOnSubmit} encType="multipart/form-data">

                { !user.validNombre ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="nombre"><strong>Nombres:</strong> {user.nombre}</label>
                        <input className="col-4" type="text" name="nombre" id="nombre" placeholder="Ingrese los nombres corregido" />
                        <hr></hr>
                    </div>
                ):(
                    null
                )}

                { !user.validApellido ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="apellido"><strong>Apellidos:</strong> {user.apellido}</label>
                        <input className="col-4" type="text" name="apellido" id="apellido" placeholder="Ingrese los apellidos corregido" />
                        <hr></hr>
                    </div>
                ):(
                    null
                )}

                { !user.validTelefono ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="telefono"><strong>Teléfono:</strong> {user.telefono}</label>
                        <input className="col-4" type="tel" name="telefono" id="telefono" placeholder="Ingrese el teléfono corregido" />
                        <hr></hr>
                    </div>
                ):(
                    null
                )}

                { !user.validCiudad ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="ciudad"><strong>Ciudad:</strong> {user.ciudad}</label>
                        <input className="col-4" type="text" name="ciudad" id="ciudad" placeholder="Ingrese la ciudad corregida" />
                        <hr></hr>
                    </div>
                ):(
                    null
                )}

                { !user.validProvincia ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4"><strong>Provincia:</strong> {user.provincia}</label>
                        <select className="col-4" name="provincia" id="provincia" >
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
                        <hr></hr>
                    </div>
                ):(
                    null
                )}

                { !user.validDireccion ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="direccion"><strong>Dirección:</strong> {user.direccion}</label>
                        <input className="col-4" type="text" name="direccion" id="direccion" placeholder="Ingrese la dirección corregida" />
                        <hr></hr>
                    </div>
                ):(
                    null
                )}

                { !user.validPerfilProfesional ? (
                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="perfilProfesional"><strong>Perfil profesional: </strong> {user.naturalData.perfilProfesional} </label>
                        <textarea className="col-4" name="perfilProfesional" id="perfilProfesional" value=""/>
                    </div>
                ):(
                    null
                )}

                { user.validNombre && user.validApellido && user.validTelefono && user.validCiudad && user.validProvincia && user.validDireccion && user.validPerfilProfesional ? (
                    <p className="valid">Su información generalha sido validada</p> 
                    ):(
                        <input type="submit" className="btn correct__enviar" value='Guardar información' />
                    )
                }
                
            </form>

            <div className={showImgDirUpdated}>
                <p>Se actualizó el archivo</p>
            </div>

            { !user.validImgDir ? (
                <form className={showInputImgDir} onSubmit={handlerOnSubmitImgDir} encType="multipart/form-data">

                    <div className="row">
                        <p className="no-valid col-1">Invalido</p>
                        <label className="col-4" htmlFor="imgDir">Documento que respalde la dirección: </label>
                        <input className="col-4" type="file" name="imgDir" id="imgDir" accept=".pdf, .jpg" />
                    </div>

                    <input type="submit" className="btn correct__enviar" value="Actualizar archivo" />

                </form>
            ):(
                null
            )}

            <hr></hr>

            <div className="confirm__correct">
                <p>Una vez actualizadala toda la información requerida de click en validar información</p>
                <button className="btn form__btn--enviar" onClick={handleUpdatedInfo}>Validar Información</button>
            </div>

        </div>
    );
}

export default NaturalFormCorrect;