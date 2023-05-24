import { toast } from 'react-toastify'
import axiosInstance from "../api/axiosInstance"

const deleteUser = async(id) => {
    try {
        await axiosInstance.delete(`/users/${id}/`)
        toast.success("user DELETED successfully")
    } catch (error) {
        console.log(error)
        toast.error("User not deleted")
    }
}

export default deleteUser;