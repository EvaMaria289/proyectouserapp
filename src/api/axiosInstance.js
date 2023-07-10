import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://users-crud.academlo.tech/" });

export default axiosInstance;
