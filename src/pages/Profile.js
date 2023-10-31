import { useParams } from 'react-router-dom';

const Profile = () => {

    const userData = useParams();

    console.log( userData );

    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}

export default Profile;