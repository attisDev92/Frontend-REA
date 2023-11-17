import axiosInstance from "../../config/config";

export const login = async userObject => {
    const request = axiosInstance.post(`/api/login`, userObject);
    const response = await request;
    return response.data;
};

export const getUser = async token => {

    const headers = {
        Authorization: `${token}`,
    };

    const request = axiosInstance.get('/api/login', { headers });
    const response = await request;
    return response.data;
};

export const register = async newUser => {
    const request = axiosInstance.post(`/api/register`, newUser);
    const response = await request;
    return response;
}

export const authMail = async updateUser => {
    const request = axiosInstance.put(`/api/authmail`, updateUser);
    const response = await request;
    console.log(response);
    debugger
    return response.data;
}