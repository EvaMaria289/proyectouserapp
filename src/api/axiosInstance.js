import axios from "axios";

const axiosInstance = axios.create({ baseURL: "https://users-crud.academlo.tech/" });

export default axiosInstance;
