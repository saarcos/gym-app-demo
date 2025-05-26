import axios from "axios";

export const createWorkoutSession = async ( sessionData ) => {
  try {
    const axiosResponse = await axios.post(
      "http://localhost:4000/api/training-session/create-session",
      sessionData,
      { withCredentials: true }
    );
    return axiosResponse?.data; 
  } catch (error) {
    // Lanzar error para que TanStack Query lo capture
    throw new Error(
      error?.response?.data?.message || "Couldn't fetch the routines"
    );
  }
};
