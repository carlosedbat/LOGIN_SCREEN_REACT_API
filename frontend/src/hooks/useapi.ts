import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost/api"
});

export const useApi = () => ({
    validateToken:async (token:string) => {
        const response = await api.post('/validate',{token});
        return response.data;
    },
    singin:async (email:string, password:string) => {
        const response = await api.post('/signin',{email,password});
        return response.data;
    },
    logout:async () => {
        return {status:true};
        const response = await api.post('/logout');
        return response.data;
    }
});