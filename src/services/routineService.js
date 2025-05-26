import axios from 'axios'

export const createRoutine = async (routineData) => {
    try {
        const axiosResponse = await axios.post('http://localhost:4000/api/routine/create-routine', routineData, { withCredentials: true });
        return axiosResponse?.data;
    } catch (error) {
        return {
            success: false,
            message: error?.response?.data?.message || "Couldn't create the routine",
        };
    }
}
export const getRoutinesByUserId = async (userId) => {
    try {
        const axiosResponse = await axios.get(`http://localhost:4000/api/routine/get-routines-by-user/${userId}`, { withCredentials: true });
        return axiosResponse?.data;
    } catch (error) {
        return {
            success: false,
            message: error?.response?.data?.message || "Couldn't fetch the routines",
        };
    }
}
export const deleteRoutineById = async (routineId) => {
    try {
        const axiosResponse = await axios.delete(`http://localhost:4000/api/routine/delete-routine-by-id/${routineId}`, { withCredentials: true });
        return axiosResponse?.data;
    } catch (error) {
        return {
            success: false,
            message: error?.response?.data?.message || "Couldn't fetch the routines",
        };
    }
}

export const getRoutineById = async (routineId) => {
    try {
        const axiosResponse = await axios.get(`http://localhost:4000/api/routine/get-routine-by-id/${routineId}`);
        return axiosResponse?.data.routine;
    } catch (error) {
        return {
            success: false,
            message: error?.response?.data?.message || "Couldn't fetch the routines",
        };
    }
}