import axiosInstance from "../../config/config";

export const getJuridico = async token => {

    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.get('/api/juridico', { headers });
    const response = await request;
    return response;
};

export const getNatural = async token => {
    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.get('/api/natural', { headers });
    const response = await request;
    return response;
};

export const getEspacios = async token => {

    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.get('/api/espacios', { headers });
    const response = await request;
    return response;
};

export const getGestor = async token => {
    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.get('/api/gestor', { headers });
    const response = await request;
    return response;
};