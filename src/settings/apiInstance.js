import axios from "axios";
const envs = {
    apiUrl: import.meta.env.VITE_API_URL
}
export const apiInstance = axios.create({
    baseURL: envs.apiUrl,
    //json-server needs this header for post,put and patch requests
    // headers: {'Content-Type': 'application/json'}
});