import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userService } from '../services';

const AuthMail = () => {
    
    const [ userId, setUserId ] = useState('');
    const [ authOkMessage, setAuthOkMessage ] = useState('alert--none');
    const [ authErrorAuthMessage, setErrorAuthMessage ] =useState('alert--none');

    const navigateTo = useNavigate();

    const handlerOnSubmit = (e) => {
        e.preventDefault();

        const updateUser = String(userId);
        
        userService.authMail(updateUser)
            .then(response => {
                console.log(response);
                setAuthOkMessage('alert');
                setTimeout(navigateTo('/'), 5000);
            })
            .catch(err => {
                if (err.response.status) setErrorAuthMessage('alert');
            })
        
        setAuthOkMessage('alert--none');
        setErrorAuthMessage('alert--none');
    }
    
    return (
        <div className="contenedor__formulario">
            <p className="texto__formulario texto--autenticar">
                Por favor, ingrese el codigo para autenticar su correo electrónicoa
            </p>

            <form className="login__formulario" onSubmit={handlerOnSubmit} >
                <input type="text" name="autenticación" placeholder="Código de autenticación" onChange={(e) => setUserId(e.target.value)}/>
                <input type="submit" className='btn' value='Validar mail' />
            </form>

            <span className={authOkMessage}>
                Su usario ha sido autenticado correctamente, inicio sesión y complete su registro
            </span>
            <span className={authErrorAuthMessage}>
                El token de autenticación no coincide, revise su mail y vuelva a intentarlo.
                Si el problema persiste comuníquese con nosotros.
            </span>

        </div>
    )
}

export default AuthMail;