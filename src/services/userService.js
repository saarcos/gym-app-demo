
import axios from 'axios'
export const checkAuth = async () => {
    try {
        const response = await axios.get('http://localhost:4000/api/user/profile', {
            withCredentials: true,
        });
        return { success: true, user: response.data.user };
    } catch (error) {
        return {
            success: false,
            message: error?.response?.data?.message || "Couldn't verify the user",
        };
    }
};

export const registerUser = async (formData) => {
    try {
        const axiosResponse = await axios.post('http://localhost:4000/api/user/register', formData, { withCredentials: true });
        return { success: true, user: axiosResponse.data.user }
    } catch (error) {
        return {
            success: false,
            message: error?.response?.data?.message || "Couldn't create a new user",
        };
    }
}

export const loginUser = async (formData) => {
    try {
        const response = await axios.post(
            'http://localhost:4000/api/user/login',
            formData,
            { withCredentials: true }
        );
        return { success: true, user: response.data.user };
    } catch (error) {
        return {
            success: false,
            message: error?.response?.data?.message || "Incorrect credentials",
        };
    }
};

export const logoutUser = async () => {
    try {
        const axiosResponse = await axios.post('http://localhost:4000/api/user/logout', {}, { withCredentials: true });
        return axiosResponse?.data;
    } catch (error) {
        return {
            success: false,
            message: error?.response?.data?.message || 'Unable to logout',
        }
    }

}