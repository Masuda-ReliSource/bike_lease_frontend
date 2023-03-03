import axios from "axios";
import Cookies from "js-cookie";

export const postData = async (url, data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/${url}`, data, {
            headers: {
                Authorization: Cookies.get("token") || "",
            }
        });
        return response;
    } catch(err){
        return err.response;
    }
};

export const getAllData = async (url) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`, {
            headers: {
                Authorization: Cookies.get("token") || "",
            }
        });
        return response;
    } catch(err){
        return err.response;
    }
};

export const updateData = async (url, data) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/${url}`, data, {
            headers: {
                Authorization: Cookies.get("token") || "",
            }
        });
        return response;
    } catch(err){
        return err.response;
    }
}
