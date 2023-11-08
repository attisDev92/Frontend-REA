import { Routes, Route, useNavigate} from 'react-router-dom';
import Header from './layouts/Header';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Register from './pages/Register';
import Validation from './pages/Validation';
import NotFound from './components/NotFound';
import Profile from './pages/Profile';
import RegisterProfile from './pages/RegisterProfile';
import RegisterEspGes from './pages/RegisterEspGet';
import AuthMail from './pages/AuthMail';
import AdminLogin from './pages/AdminLogin';
import BtnLogOut from './components/BtnLogOut';
import { useEffect, useState } from 'react';
import { userService } from './services';

const App = () => {

    const [ isLogged, setIsLogged ] = useState(false);
    const [ user, setUser ] = useState({});
    const navigateTo = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem('signedToken');

        if(!token) {
            return setIsLogged(false);
        }

        const headers = {
            Authorization: `${token}`,
        };

        userService.getUser(headers)
            .then(response => {
                setUser(response);
                setIsLogged(true);
            })
            .catch(err => {
                console.error(err);
                setIsLogged(false);
            })
            
    }, [navigateTo]);

    const btnLogOut = () => {
        if(isLogged) {
            return <BtnLogOut handlerLogOut={handlerLogOut}/>
        }
    }

    const handlerLogOut = () => {
        localStorage.removeItem('signedToken');
        setIsLogged(false);
        setUser({});
        navigateTo('/login');
    }

    return (
        <main>
            <Header />
            {btnLogOut()}
            <Routes>
                <Route path="/"  element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route path="/register" element={<Register />} />
                <Route path="/validation_mail" element={<Validation />} />
                <Route path="/auth_mail" element={<AuthMail />} />
                <Route path="/register_profile" element={ isLogged ? <RegisterProfile userData={user} /> : <Login/>} />
                <Route path="/register_esp_usu" element={ isLogged ? <RegisterEspGes userData={user} /> : <Login />} />
                <Route path="/profile" element={ isLogged ? <Profile userData={user} /> : <Login />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default App;
