import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodexplorer-api-hw7x.onrender.com"
});