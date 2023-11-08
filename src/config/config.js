import axios from 'axios';

const urlService = process.env.REACT_APP_SERVER_URL;

const axiosInstance = axios.create({ 
    baseURL: urlService,
})

export default axiosInstance;
