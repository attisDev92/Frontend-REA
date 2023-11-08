import { useState } from "react";
import { registerService } from "../services";

export const FormEspacio = ({ userData }) => {

    const [ user ] = useState(userData);
    const token = localStorage.getItem('signedToken');

    const handlerOnSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('userId', user._id);
        formData.append('nombreEspacio', document.getElementById('nombreEspacio').value);
        formData.append('nombreResponsable', document.getElementById('nombreResponsable').value);
        formData.append('cargoResponsable ', document.getElementById('cargoResponsable ').value);
        formData.append('celularResponsable', document.getElementById('celularResponsable').value);
        formData.append('mailResponsable ', document.getElementById('mailResponsable ').value);
        formData.append('tipoDeEspacio ', document.getElementById('tipoDeEspacio ').value);
        formData.append('direccionEspacio', document.getElementById('direccionEspacio').value);
        formData.append('provincia', document.getElementById('provincia').value);
        formData.append('ciudad ', document.getElementById('ciudad ').value);
        formData.append('descripcion', document.getElementById('descripcion').value);
        formData.append('aforo ', document.getElementById('aforo ').value);
        formData.append('equipoProyeccion ', document.getElementById('equipoProyeccion ').value);
        formData.append('tipoDeReproductor', document.getElementById('tipoDeReproductor').value);
        formData.append('equipoAudio ', document.getElementById('equipoAudio ').value);
        formData.append('otrosServicios ', document.getElementById('otrosServicios ').value);
        formData.append('publicoPrivado ', document.getElementById('publicoPrivado ').value);
        formData.append('imgLogo', document.getElementById('imgLogo').files[0]);
        formData.append('fotoEspacio1', document.getElementById('fotoEspacio1').files[0]);
        formData.append('fotoEspacio2', document.getElementById('fotoEspacio2').files[0]);
        formData.append('fotoEspacio3', document.getElementById('fotoEspacio3').files[0]);
        formData.append('imgAutorizacion', document.getElementById('imgAutorizacion').files[0]);

        registerService.espacio(formData, token)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            })

    };

    return (
        <form onSubmit={handlerOnSubmit} encType="multipart/form-data">

            <fieldset>
                <legend>Información general del espacio</legend>

                <label for="nombreEspacio"></label>
                <input type="text" name="nombreEspacio" id="nombreEspacio" placeholder="Centro de Arte ..."/>

                <label for="direccionEspacio">Dirección del espacio</label>
                <input type="text" name="direccionEspacio" id="direccionEspacio" placeholder="Av. Principal y Calle Secundaria"/>

                <label for="ciudad">Ciudad donde se encuentra el espacio</label>
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

                <legend>Informacion técnica del espacio</legend>

                <label for="descripcion">Descripción del Espacio</label>
                <textarea type="text" name="descripcion" id="descripcion">Breve descripción del espacio y las actividades que ejecuta</textarea>

                <label for="tipoDeEspacio">Tipo de espacio</label>
                <select name="tipoDeEspacio" id="tipoDeEspacio">
                    <option value="Centro cultural">Centro cultural</option>
                    <option value="Galería">Galería</option>
                    <option value="Universidad">Universidad</option>
                    <option value="Casade la cultura">Casa de la cultura</option>
                    <option value="Café-arte">Café Arte</option>
                    <option value="escuela o colegio">Escuela o Colegio</option>
                </select>

                <label for="aforo">Aforo del espacio</label>
                <input type="number" name="aforo" id="aforo"/>

                <p for="equipo-proyect">Equipo de proyección</p>
                <input type="checkbox" name="equipoProyeccion[]" value="proyector" id="proyector"/>
                <label for="proyector">Proyector</label>
                <input type="checkbox" name="equipoProyeccion[]" value="televisión" id="televisión"/>
                <label for="televisión">Televisión</label>
                <input type="checkbox" name="equipoProyeccion[]" value="pantalla" id="pantalla"/>
                <label for="pantalla">pantalla</label>
                <input type="checkbox" name="equipoProyeccion[]" value="otro" id="otro"/>
                <label for="otro">Otro</label>
                
                <p for="tipo-proyect">Equipo de reproducción</p>
                <input type="checkbox" name="equipoReproductor[]" value="DVD" id="DVD"/>
                <label for="DVD">DVD</label>
                <input type="checkbox" name="equipoReproductor[]" value="BluRay" id="BluRay"/>
                <label for="BluRay">BluRay</label>
                <input type="checkbox" name="equipoReproductor[]" value="Formato digital" id="Formato-digital"/>
                <label for="Formato-digital">Formato digital</label>
            
                <label for="equipoAudio">Equipo de Audio</label>
                <input type="text" name="equipoAudio" id="equipoAudio" placeholder="Equipode audio Dolby5.1"/>

                <label for="otrosServicios">Otros Servicio</label>
                <input type="text" name="otrosServicios" id="otrosServicios" placeholder="ejm: cafetería, tienda artesanal, etc"/>

                <select name="publicoPrivado" id="publicoPrivado">
                    <option value="publico">Público</option>
                    <option value="privado">Privado</option>
                </select>

                <legend>Datos del responsable de la sala</legend>

                <label for="nombreResponsable">Nombre y Apellido del responsalbe de la sala o espacio</label>
                <input type="text" name="nombreResponsable" id="nombreResponsable" placeholder="Nombre Apellido"/>

                <label for="cargoResponsable">Cargo del responsable de la sala</label>
                <input type="text" name="cargoResponsable" id="cargoResponsable" placeholder="programador, administrador, etc"/>

                <label for="mailResponsable">Correo electrónico</label>
                <input type="email" name="mailResponsable" id="mailResponsable" placeholder="centrodearte@mail.com"/>

                <label for="celularResponsable">Celular</label>
                <input type="tel" name="celularResponsable" id="celularResponsable" placeholder="centrodearte@mail.com"/>

                <legend>Documentos</legend>

                <label for="imgLogo">Logo del espacio</label>
                <input type="file" name="imgLogo" id="imgLogo"/>

                <label for="fotoEspacio1">Foto del espacio - vista general</label>
                <input type="file" name="fotoEspacio1" id="fotoEspacio1"/>

                <label for="fotoEspacio2">Foto del espacio - butacas</label>
                <input type="file" name="fotoEspacio2" id="fotoEspacio2"/>

                <label for="fotoEspacio3">Foto del espacio - pantalla</label>
                <input type="file" name="fotoEspacio3" id="fotoEspacio3"/>

                <label for="imgAutorizacion">Documento de nombrameinto o autorización</label>
                <input type="file" name="imgAutorizacion" id="imgAutorizacion"/>

                <input type="submit" class="btn form__btn--enviar" value="Enviar registro" id="submit-form-gest"/>

            </fieldset>

        </form>
    )
}