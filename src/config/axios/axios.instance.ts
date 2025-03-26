import axios, { AxiosInstance } from "axios";

const createAxiosInstance = (): AxiosInstance => {

    const AxiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        timeout: 50000,
    });

    return AxiosInstance; 
};

export { createAxiosInstance};