import { useState } from "react";
import { registerService } from "../services";

export const FormNatural = ({ userData }) => {

    const [ user ] = useState(userData);
    const token = localStorage.getItem('signedToken');

    console.log(user)
    console.log(token)

    const handlerOnSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('userId', user._id);
        formData.append('nombre', document.getElementById('nombre').value);
        formData.append('apellido', document.getElementById('apellido').value);
        formData.append('direccion', document.getElementById('direccion').value);
        formData.append('provincia', document.getElementById('provincia').value);
        formData.append('ciudad', document.getElementById('ciudad').value);
        formData.append('celular', document.getElementById('celular').value);
        formData.append('telefono', document.getElementById('telefono').value);
        formData.append('perfilProfesional', document.getElementById('perfilProfesional').value);
        formData.append('imgDir', document.getElementById('imgDir').files[0]);

        registerService.natural(formData, token)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <form  onSubmit={handlerOnSubmit} encType="multipart/form-data">

            <fieldset className="">
                <legend>Datos personales</legend>

                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" placeholder="primer y segundo nombre"/>

                <label htmlFor="apellido">Apellido</label>
                <input type="text" name="apellido" id="apellido" placeholder="primery segundo apellido"/>
            
                <legend>Datos Personales</legend>

                <label htmlFor="celular">Celular</label>
                <input type="tel" name="celular" id="celular" placeholder="0911111111"/>

                <label htmlFor="telefono">Teléfono</label>
                <input type="tel" name="telefono" id="telefono" placeholder="0211111111"/>

                <label htmlFor="direccion">Dirección</label>
                <input type="text" name="direccion" id="direccion" placeholder="Av. Principal y Calle Secundaria"/>

                <label htmlFor="ciudad">Ciudad</label>
                <input type="text" name="ciudad" id="ciudad" placeholder="ejem: Cuenca, Guayquil, Quito"/>

                <label>Provincia</label>
                <select name="provincia" id="provincia">
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
                    <option value="pichincha" selected>Pichincha</option>
                    <option value="santa-elena">Santa Elena</option>
                    <option value="santo-domingo-de-los-tsam">Santo Domingo de los Tsáchilas</option>
                    <option value="sucumbios">Sucumbíos</option>
                    <option value="tungurahua">Tungurahua</option>
                    <option value="zamora-chinchipe">Zamora Chinchipe</option>
                </select>

                <label htmlFor="imgDir">Documento que respalde la dirección ingresada</label>
                <input type="file" name="imgDir" id="imgDir"/>
            
                <legend>Perfil</legend>

                <label htmlFor="perfilProfesional">Perfil profesional</label>
                <textarea name="perfilProfesional" id="perfilProfesional" cols="30" rows="10">Breve descripción de su trayectoria como gestor cultural y la clase de proyectos que realiza</textarea>

                <input type="submit" class="btn form__btn--enviar" value="Enviar registro" id="submit-form-nat"/>

            </fieldset>

        </form>
    )
}