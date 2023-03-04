import axios from 'axios';

export const apiClear = axios.create({
    baseURL: 'http://207.154.249.61/api/v1',
});

const api = axios.create({
    baseURL: 'http://207.154.249.61/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use((config) => {
    if (config.headers)
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/auth';
    }
    return Promise.reject(error);
});

export default api;
