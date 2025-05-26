import axios from "axios";

export const createNewSet = async (setData) => {
    try {
        const axiosResponse = await axios.post('http://localhost:4000/api/training-set/create-serie', setData, { withCredentials: true });
        return axiosResponse?.data;
    } catch (error) {
        throw new Error(
            error?.response?.data?.message || "Couldn't create the requested set"
        );
    }
}
export const updateSet = async ({id, data}) => {
    try {
        const axiosResponse = await axios.put(`http://localhost:4000/api/training-set/update-serie/${id}`, data, { withCredentials: true });
        return axiosResponse?.data;
    } catch (error) {
        throw new Error(
            error?.response?.data?.message || "Couldn't create the requested set"
        );
    }
}