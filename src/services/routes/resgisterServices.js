import axiosInstance from "../../config/config";

export const juridico = async (formData, token) => {
    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.post(`/api/registerJuridico`, formData, {
        headers,
    });
    const response = await request;
    return response.data;
};

export const natural = async (formData, token) => {
    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.post(`/api/registerNatural`, formData, {
        headers,
    });
    const response = await request;
    return response.data;
};

export const espacio = async (formData, token) => {
    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.post(`/api/registerEspacio`, formData, {
        headers,
    });
    const response = await request;
    return response.data;
};

export const gestor = async (formData, token) => {
    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.post(`/api/registerGestor`, formData, {
        headers,
    });
    const response = await request;
    return response.data;
};