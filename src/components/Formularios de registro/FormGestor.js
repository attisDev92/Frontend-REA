import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerService } from "../../services";

const FormGestor = () => {

    const [ loader, setLoader ] = useState('loaded');
    const [ textoProyecto, setTextoProyecto ] = useState('Describa su proyecto de exhibición y como será el uso de las obras del banco decontenidos');

    const token =localStorage.getItem('signedToken');
    const navigateTo = useNavigate();

    const handlerOnSubmit = (e) => {
        e.preventDefault();
        
        setLoader('loader-section');

        const formData = new FormData();
        formData.append('proyecto', textoProyecto);
        formData.append('imgAutorizacion', document.getElementById('imgAutorizacion').files[0]);
        formData.append('imgFotoLogo', document.getElementById('imgFotoLogo').files[0]);

        registerService.gestor(formData, token)
            .then(response => {
                if(response.status === 201) {
                    setLoader('loaded');
                    return navigateTo('/profile');
                }
            })
            .catch(err => {
                setLoader('loaded');
                console.error(err);
            })
    }

    const handlerClickOntexto = () => {
        setTextoProyecto('')
    }
    return (
        <form className="formulario__registro" onSubmit={handlerOnSubmit} encType="multipart/form-data" >

            <div className={loader}>
				<span className="loader"></span>
			</div>

            <fieldset>
                <legend>Información Usuario del Banco de Contenidos</legend>

                <label htmlFor="proyecto">Proyecto de exhibición:</label>
                <textarea name="proyecto" id="proyecto" cols="30" rows="10" onChange={e => setTextoProyecto(e.target.value)} value={textoProyecto} onClick={handlerClickOntexto} required />

                <legend>Documentos</legend>

                <div className="row">
                    <label className="col-4" htmlFor="imgFotoLogo">Logo o foto del gestor:</label>
                    <input className="col-4" type="file" name="imgFotoLogo" id="imgFotoLogo" accept=".jpg" required/>
                </div>

                <div className="row">
                    <label className="col-4" htmlFor="imgAutorizacion">*Nombramiento o autorización:</label>
                    <input className="col-4" type="file" name="imgAutorizacion" id="imgAutorizacion" accept=".pdf, .jpg"/>
                </div>
                <p>*Solo en caso de personas jurídicas</p>

                <input type="submit" class="btn form__btn--enviar" value="Enviar registro" id="submit-form-gest"/>

            </fieldset>
        </form>
    )
}

export default FormGestor;