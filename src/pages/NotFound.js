/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigateTo = useNavigate();

    setTimeout( () => {
        navigateTo('/')
    }, 5000)

    return (
        <div className='contenedor__formulario'>
            <img src="./assets/img/404.jpg" />
        </div>
    )
}

export default NotFound;