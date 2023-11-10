import { useState } from "react";
import { registerService } from "../services";
import { useNavigate } from "react-router-dom";
import validationsForm from "../lib/validationsForm";

export const FormJuridico = ({ userData }) => {

    const [ user ] = useState(userData);
    const [ telfErrorMessage, setTelfErroMessage ] = useState('alert--none');

    const token = localStorage.getItem('signedToken');
    const navigateTo = useNavigate();

    const handlerOnSubmit = (e) => {
        e.preventDefault();

        setTelfErroMessage('alert--none')

        if (!validationsForm.validationTelf('telefono')) {
            setTelfErroMessage('alert');
        }

        const formData = new FormData();
        formData.append('userId', user._id);
        formData.append('nombreComercial', validationsForm.upperCaseWords('nombreComercial')); 
        formData.append('nombreRepresentante',validationsForm.upperCaseWords('nombreRepresentante')); 
        formData.append('apellidoRepresentante', validationsForm.upperCaseWords('apellidoRepresentante')); 
        formData.append('direccion', document.getElementById('direccion').value);
        formData.append('provincia', document.getElementById('provincia').value); 
        formData.append('ciudad', validationsForm.upperCaseWords('ciudad')); 
        formData.append('telefono', document.getElementById('telefono').value); 
        formData.append('imgDir', document.getElementById('imgDir').files[0]);
        formData.append('imgRuc', document.getElementById('imgRuc').files[0]);

        registerService.juridico(formData, token)
            .then(response => {
                console.log(response);
                if(response.status === 201) {
                    navigateTo('/register_esp_usu');
                }
            })
            .catch(err => {
                console.error(err);
                if(err) {
                    alert("Existe un problema con el servidor, salga y vuelva a ingrear. Si el problema persiste comuniquese con nosotros");
                }
            })
    };

    return (
        <form onSubmit={handlerOnSubmit} encType="multipart/form-data">
            <fieldset className="">
                <legend>Datos de la organización</legend>

                <label htmlFor="nombreComercial">Nombre de la organización</label>
                <input type="text" name="nombreComercial" id="nombreComercial" placeholder="ejm: Instituto de ..." required/>

                <label htmlFor="direccion">Dirección del Espacio</label>
                <input type="text" name="direccion" id="direccion" placeholder="Av. Principal y Calle Secundaria" required />

                <label htmlFor="ciudad">Ciudad</label>
                <input type="text" name="ciudad" id="ciudad" placeholder="ejem: Cuenca, Guayquil, Quito" required />

                <label htmlFor="provincia">Provincia</label>
                <select name="provincia" id="provincia" required >
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

                <legend>Datos Representante Legal</legend>

                <label htmlFor="nombreRepresentante">Nombres del Representante</label>
                <input type="text" name="nombreRepresentante" id="nombreRepresentante" placeholder="primer y segundo nombre" required />

                <label htmlFor="apellidoRepresentante">Apellidos del Representante</label>
                <input type="text" name="apellidoRepresentante" id="apellidoRepresentante" placeholder="primer y segundo apellido" required />

                <label htmlFor="telefono">Teléfono fijo o celular</label>
                <input type="tel" name="telefono" id="telefono" placeholder="ej: 0999999999" required/>
                <span className={ telfErrorMessage }>
                    Debe colocar un número de teléfono válido que comience con 593 seguido del codigo de area en el caso de teléfonos fijos o de 593 y el número celular
                </span>
            
                <legend>Documentos personería juridica</legend>

                <label htmlFor="imgRuc">Ruc escaneado</label>
                <input type="file" name="imgRuc" id="imgRuc" accept=".pdf, .jpg" required />

                <label htmlFor="imgDir">Documento que respalde la dirección ingresada</label>
                <input type="file" name="imgDir" id="imgDir" accept=".pdf, .jpg" required />

                <input type="submit" className="btn form__btn--enviar" value="Registrar Persona Jurdídica" />

            </fieldset>

        </form>
    );
};