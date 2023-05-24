import { toast } from 'react-toastify'
import axiosInstance from "../api/axiosInstance"

const updateUser = async(id, data) => {
    try {
        await axiosInstance.patch(`/users/${id}/`, data);
        toast.success("user UPDATED successfully")
    } catch (error) {
        console.log(error)
        toast.error("User not updated")
    }
}

export default updateUser;