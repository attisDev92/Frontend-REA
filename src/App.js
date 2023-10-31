import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Register from './pages/Register';
import Validation from './pages/Validation';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import RegisterProfile from './pages/Register';
import AuthMail from './pages/AuthMail';



const App = () => {
    return (
        <main>

            <Header />

            <Routes>

                <Route path='/' exact element={<Login/>} />

				<Route path='/resetPassword' element={<ResetPassword />} />

				<Route path='/register' element={<Register />} />

				<Route path='/validation_mail' element={<Validation />} />

                <Route path='/auth_mail' element={<AuthMail/>} />

                <Route path='/register_profile' element={< RegisterProfile />} />

                <Route path='/profile' element={<Profile />} />

                <Route path='*' element={<NotFound />} />

            </Routes>
			
        </main>
    );
};

export default App;

