import axiosInstance from "../../config/config";

export const juridico = async (formData, token) => {
    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.put(`/api/registerJuridico`, formData, {
        headers,
    });
    const response = await request;
    return response;
};

export const natural = async (formData, token) => {
    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.put(`/api/registerNatural`, formData, {
        headers,
    });
    const response = await request;
    return response;
};

export const espacio = async (formData, token) => {
    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.put(`/api/registerEspacio`, formData, {
        headers,
    });
    const response = await request;
    return response;
};

export const gestor = async (formData, token) => {
    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.put(`/api/registerGestor`, formData, {
        headers,
    });
    const response = await request;
    return response;
};