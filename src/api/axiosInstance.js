import axios from "axios";

const axiosInstance = axios.create({ baseURL: "https://user-api-djec.onrender.com/" });

export default axiosInstance;