import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerService } from "../services";
import validationsForm from "../lib/validationsForm";

const FormEspacio = ({ userData }) => {

    const [ user ] = useState(userData);
    const [ telfErrorMessage, setTelfErroMessage ] = useState('alert--none');
    const [ mailErrorMessage, setMailErrorMessage ] = useState('alert-none');
    const token = localStorage.getItem('signedToken');
    const navigateTo = useNavigate();

    const handlerOnSubmit = (e) => {
        e.preventDefault();

        setTelfErroMessage('alert--none');
        setMailErrorMessage('alert--none');

        if (!validationsForm.validationTelf('celularResponsable')) {
            setTelfErroMessage('alert');
        }

        if (!validationsForm.validMail('mailResponsable')) {
            setMailErrorMessage('alert')
        }

        const checkboxsEquipoProyeccion = Array.from(document.querySelectorAll('input[name="equipoProyeccion"]:checked')).map(checkbox => checkbox.value);
        const checkboxsEquipoReproductor = Array.from(document.querySelectorAll('input[name="equipoReproductor"]:checked')).map(checkbox => checkbox.value);

        const formData = new FormData();
        formData.append('userId', user._id);
        formData.append('nombreEspacio', validationsForm.upperCaseWords('nombreEspacio'));
        formData.append('nombreResponsable', validationsForm.upperCaseWords('nombreResponsable'));
        formData.append('cargoResponsable', validationsForm.upperCaseWords('cargoResponsable'));
        formData.append('celularResponsable', document.getElementById('celularResponsable').value);
        formData.append('mailResponsable', document.getElementById('mailResponsable').value);
        formData.append('tipoDeEspacio', document.getElementById('tipoDeEspacio').value);
        formData.append('direccionEspacio', document.getElementById('direccionEspacio').value);
        formData.append('provincia', document.getElementById('provincia').value);
        formData.append('ciudad', validationsForm.upperCaseWords('ciudad'));
        formData.append('descripcion', document.getElementById('descripcion').value);
        formData.append('aforo', document.getElementById('aforo').value);
        formData.append('equipoProyeccion', checkboxsEquipoProyeccion.join(','));
        formData.append('equipoReproductor', checkboxsEquipoReproductor.join(','));
        formData.append('equipoAudio ', document.getElementById('equipoAudio').value);
        formData.append('otrosServicios ', document.getElementById('otrosServicios').value);
        formData.append('publicoPrivado ', document.getElementById('publicoPrivado').value);
        formData.append('imgLogo', document.getElementById('imgLogo').files[0]);
        formData.append('fotoEspacio1', document.getElementById('fotoEspacio1').files[0]);
        formData.append('fotoEspacio2', document.getElementById('fotoEspacio2').files[0]);
        formData.append('fotoEspacio3', document.getElementById('fotoEspacio3').files[0]);
        formData.append('imgAutorizacion', document.getElementById('imgAutorizacion').files[0]);

        registerService.espacio(formData, token)
            .then(response => {
                console.log(response);
                navigateTo('/profile');
            })
            .catch(err => {
                console.error(err);
            })

    };

    return (
        <form onSubmit={handlerOnSubmit} encType="multipart/form-data">

            <fieldset>
                <legend>Información general del espacio</legend>

                <label htmlFor="nombreEspacio"></label>
                <input type="text" name="nombreEspacio" id="nombreEspacio" placeholder="Centro de Arte ..." required/>

                <label htmlFor="direccionEspacio">Dirección del espacio</label>
                <input type="text" name="direccionEspacio" id="direccionEspacio" placeholder="Av. Principal y Calle Secundaria" required/>

                <label htmlFor="ciudad">Ciudad donde se encuentra el espacio</label>
                <input type="text" name="ciudad" id="ciudad" placeholder="ejem: Cuenca, Guayquil, Quito" required/>

                <label>Provincia</label>
                <select name="provincia" id="provincia">
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

                <legend>Informacion técnica del espacio</legend>

                <label htmlFor="descripcion">Descripción del Espacio</label>
                <textarea type="text" name="descripcion" id="descripcion" required>Breve descripción del espacio y las actividades que ejecuta</textarea>

                <label htmlFor="tipoDeEspacio">Tipo de espacio</label>
                <select name="tipoDeEspacio" id="tipoDeEspacio" required>
                    <option value="Centro cultural">Centro cultural</option>
                    <option value="Galería">Galería</option>
                    <option value="Universidad">Universidad</option>
                    <option value="Casade la cultura">Casa de la cultura</option>
                    <option value="Café-arte">Café Arte</option>
                    <option value="escuela o colegio">Escuela o Colegio</option>
                </select>

                <label htmlFor="aforo">Aforo del espacio</label>
                <input type="number" name="aforo" id="aforo" required/>

                <p>Equipo de proyección</p>
                    <input type="checkbox" name="equipoProyeccion" value="proyector" id="proyector" required/>
                    <label htmlFor="proyector">Proyector</label>
                    <input type="checkbox" name="equipoProyeccion" value="televisión" id="televisión"/>
                    <label htmlFor="televisión">Televisión</label>
                    <input type="checkbox" name="equipoProyeccion" value="pantalla" id="pantalla"/>
                    <label htmlFor="pantalla">pantalla</label>
                    <input type="checkbox" name="equipoProyeccion" value="otro" id="otro"/>
                    <label htmlFor="otro">Otro</label>
                
                <p>Equipo de reproducción</p>
                    <input type="checkbox" name="equipoReproductor" value="DVD" id="DVD" required/>
                    <label htmlFor="DVD">DVD</label>
                    <input type="checkbox" name="equipoReproductor" value="BluRay" id="BluRay"/>
                    <label htmlFor="BluRay">BluRay</label>
                    <input type="checkbox" name="equipoReproductor" value="Formato digital" id="Formato-digital"/>
                    <label htmlFor="Formato-digital">Formato digital</label>
            
                <label htmlFor="equipoAudio">Equipo de Audio</label>
                <input type="text" name="equipoAudio" id="equipoAudio" placeholder="Equipode audio Dolby5.1" required/>

                <label htmlFor="otrosServicios">Otros Servicio</label>
                <input type="text" name="otrosServicios" id="otrosServicios" placeholder="ejm: cafetería, tienda artesanal, etc" required/>

                <select name="publicoPrivado" id="publicoPrivado" required>
                    <option value="publico">Público</option>
                    <option value="privado">Privado</option>
                </select>

                <legend>Datos del responsable de la sala</legend>

                <label htmlFor="nombreResponsable">Nombre y Apellido del responsalbe de la sala o espacio</label>
                <input type="text" name="nombreResponsable" id="nombreResponsable" placeholder="Nombre Apellido"/>

                <label htmlFor="cargoResponsable">Cargo del responsable de la sala</label>
                <input type="text" name="cargoResponsable" id="cargoResponsable" placeholder="programador, administrador, etc"/>

                <label htmlFor="mailResponsable">Correo electrónico</label>
                <input type="email" name="mailResponsable" id="mailResponsable" placeholder="centrodearte@mail.com" required/>
                <span className={ mailErrorMessage }>
                    Debe colocar un mail valido, este mail será al que se enviaran las obras cinematográficas cuando las soliciten.
                </span>

                <label htmlFor="celularResponsable">Celular</label>
                <input type="tel" name="celularResponsable" id="celularResponsable" placeholder="0999999999" required/>
                <span className={ telfErrorMessage }>
                    Debe colocar un número de teléfono válido que comience con 593 seguido del codigo de area en el caso de teléfonos fijos o de 593 y el número celular
                </span>

                <legend>Documentos</legend>

                <label htmlFor="imgLogo">Logo del espacio</label>
                <input type="file" name="imgLogo" id="imgLogo" accept=".jpg" required/>

                <label htmlFor="fotoEspacio1">Foto del espacio - vista general</label>
                <input type="file" name="fotoEspacio1" id="fotoEspacio1" accept=".jpg" required/>

                <label htmlFor="fotoEspacio2">Foto del espacio - butacas</label>
                <input type="file" name="fotoEspacio2" id="fotoEspacio2" accept=".jpg" required/>

                <label htmlFor="fotoEspacio3">Foto del espacio - pantalla</label>
                <input type="file" name="fotoEspacio3" id="fotoEspacio3" accept=".jpg" required/>

                <label htmlFor="imgAutorizacion">Documento de nombrameinto o autorización</label>
                <input type="file" name="imgAutorizacion" id="imgAutorizacion" accept=".pdf, .jpg" required/>

                <input onClick={handlerOnSubmit} type="submit" className="btn form__btn--enviar" value="Enviar registro" id="submit-form-gest"/>

            </fieldset>

        </form>
    )
}

export default FormEspacio;