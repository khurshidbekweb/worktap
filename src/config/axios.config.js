import axios from "axios";
import { BASE_URL } from "../constants";
import { authUtils } from "../utils/auth.utils";
import { useNavigate } from "react-router";


export const castimAxios = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
})

castimAxios.defaults.headers.common[
    "Authorization"
] = `Bearer ${localStorage.getItem("accessToken")}`;

castimAxios.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err?.response?.status == 406) {
            authUtils.refreshAuth() 
        }
        if(err?.response.status == 455) {
          const navigate = useNavigate()
        navigate('/sign-in')
      }
    }
  );