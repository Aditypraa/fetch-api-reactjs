import axios from "axios";
import { configs } from "../configs";
import { jwtDecode } from "jwt-decode";

export const getUsername = (token) => {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken)
    return decodedToken.user;
}

export const getData = async (url: string) => {
    try {
        const response = await axios.get(`${configs.apiUrl}${url}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const postData = async (url: string, data: unknown) => {
    try {
        const response = await axios.post(`${configs.apiUrl}${url}`, data);
        console.log('Error' + response.data);
        return response.data;
    } catch (error: any) {
        console.error('Error during POST request:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};
