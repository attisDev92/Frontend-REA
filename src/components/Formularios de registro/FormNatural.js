import { useState } from "react";
import { registerService } from "../../services";
import validationsForm from "../../lib/validationsForm";
import { useNavigate } from "react-router-dom";

export const FormNatural = () => {

    const [ telfErrorMessage, setTelfErroMessage ] = useState('alert--none');
    const [ loader, setLoader ] = useState('loaded');
    const [ perfilProfesional, setPerfilProfesional ] = useState ('Breve descripción de su trayectoria como gestor cultural y la clase de proyectos que realiza')

    const token = localStorage.getItem('signedToken');
    const navigateTo = useNavigate();
    
    const handlerOnSubmit = (e) => {
        e.preventDefault();

        setLoader('loader-section');

        setTelfErroMessage('alert--none')

        if (!validationsForm.validationTelf('telefono')) {
            setLoader('loader-section');
            return setTelfErroMessage('alert');
        }

        const formData = new FormData();
        formData.append('nombre', validationsForm.upperCaseWords('nombre'));
        formData.append('apellido', validationsForm.upperCaseWords('apellido'));
        formData.append('direccion', document.getElementById('direccion').value);
        formData.append('provincia', document.getElementById('provincia').value);
        formData.append('ciudad', validationsForm.upperCaseWords('ciudad'));
        formData.append('telefono', document.getElementById('telefono').value);
        formData.append('perfilProfesional', perfilProfesional);

        formData.append('imgDir', document.getElementById('imgDir').files[0]);

        registerService.natural(formData, token)
            .then(response => {
                if(response.status === 201) {
                    setLoader('loaded');
                    return navigateTo('/register_esp_usu');
                }
            })
            .catch(err => {
                setLoader('loader-section');
                console.error(err);
                if(err) {
                    alert("Existe un problema con el servidor, salga y vuelva a ingrear. Si el problema persiste comuniquese con nosotros");
                }
            })
    }

    const handlePerfilProfesionalClick = () => {
        setPerfilProfesional('');
    }

    return (
        <form className="formulario__registro" onSubmit={handlerOnSubmit} encType="multipart/form-data">
            
            <div className={loader}>
				<span className="loader"></span>
			</div>

            <legend className="titulo__registro"> Registro Personas Naturales</legend>
            
            <fieldset >
                <div className="row">
                    <label className="col-3" htmlFor="nombre">Nombres:</label>
                    <input className="col-5" type="text" name="nombre" id="nombre" placeholder="primer y segundo nombre" required/>
                </div>

                <div className="row">
                    <label className="col-3" htmlFor="apellido">Apellidos:</label>
                    <input className="col-5" type="text" name="apellido" id="apellido" placeholder="primery segundo apellido" required/>
                </div>

                <div className="row">
                    <label className="col-3" htmlFor="telefono">Teléfono fijo o celular:</label>
                    <input className="col-5" type="tel" name="telefono" id="telefono" placeholder="ej: 0999999999" required/>
                    <span className={ telfErrorMessage }>
                        Debe colocar un número de teléfono válido que comience con 593 seguido del codigo de area en el caso de teléfonos fijos o de 593 y el número celular
                    </span>
                </div>

                <hr></hr>

                <div className="row"> 
                    <label className="col-1" htmlFor="ciudad">Ciudad:</label>
                    <input className="col-3" type="text" name="ciudad" id="ciudad" placeholder="ejem: Cuenca, Guayquil, Quito" required/>

                    <label className="col-2">Provincia:</label>
                    <select className="col-3" name="provincia" id="provincia" required>
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

                <div className="row">
                    <label className="col-3" htmlFor="direccion">Dirección:</label>
                    <input className="col-5" type="text" name="direccion" id="direccion" placeholder="Av. Principal y Calle Secundaria" required/>
                </div>
                
                <div className="row">
                    <label className="col-4" htmlFor="imgDir">Documento que respalde la dirección: </label>
                    <input className="col-4" type="file" name="imgDir" id="imgDir" accept=".pdf, .jpg" required/>
                </div>

                <hr></hr>

                <label htmlFor="perfilProfesional">Perfil profesional:</label>
                <textarea name="perfilProfesional" id="perfilProfesional" cols="30" rows="10" onClick={handlePerfilProfesionalClick} value={perfilProfesional} onChange={e => setPerfilProfesional(e.target.value)} required />

                <hr></hr>

                <input type="submit" class="btn form__btn--enviar" value="Enviar registro" id="submit-form-nat"/>

            </fieldset>

        </form>
    )
}