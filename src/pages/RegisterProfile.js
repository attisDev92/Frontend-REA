import { useParams } from 'react-router-dom';

const RegisterProfile = () => {
    
    const userData = useParams();

    console.log( userData );

    return(
        <div>
            Register profile
        </div>
    )
}

export default RegisterProfile