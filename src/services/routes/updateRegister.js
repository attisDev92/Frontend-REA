import axiosInstance from "../../config/config";

export const updateProfileData = async (user, token) => {
    const headers = {
        Authorization: `${token}`,
    };
    const request = axiosInstance.put(`/api/updateProfileData`, user, {
        headers,
    });
    const response = await request;
    return response;
};

export const updateEspacio = async (user, token) => {
    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.put(`/api/updateEspacioData`, user, {
        headers,
    });
    const response = await request;
    return response;
};

export const updateGestor = async (user, token) => {
    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.put(`/api/updateGestorData`, user, {
        headers,
    });
    const response = await request;
    return response;
};