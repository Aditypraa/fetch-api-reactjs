import axios from "axios";
import { configs } from "../configs";

export const getData = async (url: string) => {
    try {
        const response = await axios.get(`${configs.apiUrl}${url}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}