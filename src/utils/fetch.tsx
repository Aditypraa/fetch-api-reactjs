import axios from "axios";
import { configs } from "../configs";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  user: string;
  // Add other properties if needed
}

export const getUsername = (token: string) => {
  const decodedToken = jwtDecode<DecodedToken>(token);
  console.log(decodedToken);
  return decodedToken.user;
};

export const getData = async (url: string) => {
  try {
    const response = await axios.get(`${configs.apiUrl}${url}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message; // Lempar error untuk penanganan di luar
    } else {
      throw error; // Lempar error untuk penanganan di luar
    }
  }
};

// menggunakan callback
export const getDataById = (
  url: string,
  id: number,
  callback: (data: any) => void,
) => {
  axios
    .get(`${configs.apiUrl}${url}/${id}`)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

// menggunakan async await
// export const getDataById = async (url: string, id: number) => {
//   try {
//     const response = await axios.get(`${configs.apiUrl}${url}/${id}`);
//     return response.data;
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       throw error.response?.data || error.message; // Lempar error untuk penanganan di luar
//     } else {
//       throw error; // Lempar error untuk penanganan di luar
//     }
//   }
// };

export const postData = async (url: string, data: unknown) => {
  try {
    const response = await axios.post(`${configs.apiUrl}${url}`, data);
    console.log("Error" + response.data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error during POST request:",
        error.response?.data || error.message,
      );
      throw error.response?.data || error.message;
    } else {
      console.error("Unexpected error:", error);
      throw error;
    }
  }
};
