import axios from 'axios';

const urlService = process.env.REACT_APP_SERVER_URL;

export const login = async userObject => {
    const request = axios.post(`${urlService}/api/login`, userObject);
    const response = await request;
    return response.data;
};

export const register = async newUser => {
    const request = axios.post(`${urlService}/api/register`, newUser);
    const response = await request;
    return response.data;
}

export const authMail = async updateUser => {
    const request = axios.patch(`${urlService}/api/authmail`, updateUser);
    const response = await request;
    console.log(response);
    debugger
    return response.data;
}

export const registerJuridico = async newJuridico => {
    const request = axios.post(`${urlService}/api/registerJuridico`, newJuridico);
    const response = await request;
    return response.data;
}

export const registerNatural = async newNatural => {
    const request = axios.post(`${urlService}/api/registerNatural`, newNatural);
    const response = await request;
    return response.data;
}

export const registerEspacio = async newEspacio => {
    const request = axios.post(`${urlService}/api/registerEspacio`, newEspacio);
    const response = await request;
    return response.data;
}

export const registerGestor = async newGestor => {
    const request = axios.post(`${urlService}/api/registerGestor`, newGestor);
    const response = await request;
    return response.data;
}