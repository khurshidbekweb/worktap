import axios from "axios";
import { BASE_URL } from "../constants";


export const castimAxios = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
})