import { login, register, authMail, getUser } from './routes/userServices';
import { juridico, natural, espacio, gestor } from './routes/resgisterServices';

export const userService = { 
    login,
    register,
    authMail,
    getUser
 }

export const registerService = {
    juridico,
    natural,
    espacio,
    gestor
}