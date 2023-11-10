import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerService } from "../services";

const FormGestor = ({ userData }) => {

    const [ user ] = useState(userData);
    const token =localStorage.getItem('signedToken');
    const navigateTo = useNavigate();

    const handlerOnSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('userId', user._id);
        formData.append('proyecto', document.getElementById('proyecto').value);
        formData.append('imgAutorizacion', document.getElementById('imgAutorizacion').files[0]);
        formData.append('imgFotoLogo', document.getElementById('imgFotoLogo').files[0]);

        registerService.gestor(formData, token)
            .then(response => {
                console.log(response);
                navigateTo('/profile');
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <form onSubmit={handlerOnSubmit} encType="multipart/form-data">

            <fieldset>
                <legend>Información Usuario del Banco de Contenidos</legend>

                <label htmlFor="proyecto">Proyecto de exhibición</label>
                <textarea name="proyecto" id="proyecto" cols="30" rows="10" required>Describa su proyecto de exhibición y como será el uso de las obras del banco decontenidos</textarea>

                <legend>Documentos</legend>

                <label htmlFor="imgFotoLogo">Logo o foto del gestor</label>
                <input type="file" name="imgFotoLogo" id="imgFotoLogo" accept=".jpg" required/>

                <label htmlFor="imgAutorizacion">Documento de nombrameinto o autorización (Solo en caso de personas jurídicas)</label>
                <input type="file" name="imgAutorizacion" id="imgAutorizacion" accept=".pdf, .jpg"/>

                <input type="submit" class="btn form__btn--enviar" value="Enviar registro" id="submit-form-gest"/>

            </fieldset>

        </form>
    )
}

export default FormGestor;