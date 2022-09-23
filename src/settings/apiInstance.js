import axios from "axios";
const envs = {
    apiUrl: import.meta.env.VITE_API_URL
}
export const apiInstance = axios.create({
    baseURL: envs.apiUrl
});