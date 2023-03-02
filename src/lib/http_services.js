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
