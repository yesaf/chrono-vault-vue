import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || '';

export const apiClear = axios.create({
    baseURL,
});

const api = axios.create({
    baseURL,
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
