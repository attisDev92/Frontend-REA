import { useState } from "react";
import { registerService } from "../services";

export const FormJuridico = ({ userData }) => {

    const [ user ] = useState(userData);
    const token = localStorage.getItem('signedToken');

    const handlerOnSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('userId', user._id);
        formData.append('nombreComercial', document.getElementById('nombreComercial').value); 
        formData.append('nombreRepresentante', document.getElementById('nombreRepresentante').value); 
        formData.append('apellidoRepresentante', document.getElementById('apellidoRepresentante').value); 
        formData.append('direccion', document.getElementById('direccion').value);
        formData.append('provincia', document.getElementById('provincia').value); 
        formData.append('ciudad', document.getElementById('ciudad').value); 
        formData.append('celular', document.getElementById('celular').value); 
        formData.append('telefono', document.getElementById('telefono').value); 
        formData.append('imgDir', document.getElementById('imgDir').files[0]);
        formData.append('imgRuc', document.getElementById('imgRuc').files[0]);

        console.log(formData)

        registerService.juridico(formData, token)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            })
    };

    return (
        <form onSubmit={handlerOnSubmit} encType="multipart/form-data">
            <fieldset className="">
                <legend>Datos de la organización</legend>

                <label htmlFor="nombreComercial">Nombre de la organización</label>
                <input type="text" name="nombreComercial" id="nombreComercial" placeholder="ejm: Instituto de ..." required/>

                <label htmlFor="telefono">Teléfono del espacio</label> 
                <input type="tel" name="telefono" id="telefono" placeholder="021111111" required />

                <label htmlFor="direccion">Dirección del Espacio</label>
                <input type="text" name="direccion" id="direccion" placeholder="Av. Principal y Calle Secundaria" required />

                <label htmlFor="ciudad">Ciudad</label>
                <input type="text" name="ciudad" id="ciudad" placeholder="ejem: Cuenca, Guayquil, Quito" required />

                <label htmlFor="provincia">Provincia</label>
                <select name="provincia" id="provincia" required >
                    <option value="">Selecciona una provincia</option>
                    <option value="azuay">Azuay</option>
                    <option value="bolivar">Bolívar</option>
                    <option value="canar">Cañar</option>
                    <option value="carchi">Carchi</option>
                    <option value="chimborazo">Chimborazo</option>
                    <option value="cotopaxi">Cotopaxi</option>
                    <option value="el-oro">El Oro</option>
                    <option value="esmeraldas">Esmeraldas</option>
                    <option value="galapagos">Galápagos</option>
                    <option value="guayas">Guayas</option>
                    <option value="imbabura">Imbabura</option>
                    <option value="loja">Loja</option>
                    <option value="los-rios">Los Ríos</option>
                    <option value="manabi">Manabí</option>
                    <option value="morona-santiago">Morona Santiago</option>
                    <option value="napo">Napo</option>
                    <option value="orellana">Orellana</option>
                    <option value="pastaza">Pastaza</option>
                    <option value="pichincha">Pichincha</option>
                    <option value="santa-elena">Santa Elena</option>
                    <option value="santo-domingo-de-los-tsam">Santo Domingo de los Tsáchilas</option>
                    <option value="sucumbios">Sucumbíos</option>
                    <option value="tungurahua">Tungurahua</option>
                    <option value="zamora-chinchipe">Zamora Chinchipe</option>
                </select>

                <legend>Datos Representante Legal</legend>

                <label htmlFor="nombreRepresentante">Nombres del Representante</label>
                <input type="text" name="nombreRepresentante" id="nombreRepresentante" placeholder="primer y segundo nombre" required />

                <label htmlFor="apellidoRepresentante">Apellidos del Representante</label>
                <input type="text" name="apellidoRepresentante" id="apellidoRepresentante" placeholder="primer y segundo apellido" required />

                <label htmlFor="celular">Celular</label>
                <input type="tel" name="celular" id="celular" placeholder="0911111111" required />
            
                <legend>Documentos personería juridica</legend>

                <label htmlFor="imgRuc">Ruc escaneado</label>
                <input type="file" name="imgRuc" id="imgRuc" required />

                <label htmlFor="imgDir">Documento que respalde la dirección ingresada</label>
                <input type="file" name="imgDir" id="imgDir" required />

                <input type="submit" className="btn form__btn--enviar" value="Registrar Persona Jurdídica" />

            </fieldset>

        </form>
    );
};