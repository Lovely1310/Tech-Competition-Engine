import axios from 'axios';

export const registerUser = async (formData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/register/', formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Something went wrong";
  }
};
