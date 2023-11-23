import axios from "axios";

const formUrl = import.meta.env.VITE_FORM_URL;

const axiosInstance = axios.create({
  baseURL: formUrl,
});

export default axiosInstance;
