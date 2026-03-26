/**
 * Axios HTTP client instance.
 * All requests inherit the base URL and default headers from here.
 */
import axios from 'axios';
// import BASE_URL from '../constants/api';
// const API_URL = process.env.EXPO_PUBLIC_API_URL;

const apiClient = axios.create({
    // baseURL: 'http://98.92.128.133:8000/api',
    // baseURL: "http://192.168.0.26:8000/api",
    // baseURL : BASE_URL,
    // baseURL: 'http://192.168.1.117:8000/api',
    // baseURL: 'http://98.92.128.133:8000',
    // baseURL: process.env.EXPO_PUBLIC_API_URL,
    baseURL: "http://98.92.128.133:8000/api",
    timeout: 60000,
});

export const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers.common['Authorization'];
    }
};

export default apiClient;
