import { toast } from 'react-toastify'
import axiosInstance from "../api/axiosInstance"

const createUser = async(data) => {
    try {
        await axiosInstance.post('/users/', data);
        toast.success("User ADDED successfully")
    } catch (error) {
        toast.error("User not added")
        console.log(error)
    }
}

export default createUser;