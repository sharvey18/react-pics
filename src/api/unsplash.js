import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ugC2aUf61b8xMPA1PyxIbhmSdIczQaJfpekzUDU5lPA'
    }
});