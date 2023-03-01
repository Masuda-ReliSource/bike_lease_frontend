import axios from "axios";

export const postData = async (url, data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/${url}`, data);
        return response.data;
    } catch(err){
        return err.response;
    }
};
