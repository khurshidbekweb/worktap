
import { castimAxios } from "../config/axios.config";

export const authUtils = {
  registerAuth: async ({ email, name, password, phone, roles, surname }) => {
    const { data } = await castimAxios.post("auth/register", {
      email: email,
      password: password,
      userAgent: window.navigator.userAgent,
      name: name,
      phone: phone,
      roles: roles,
      surname: surname,
    });
    return data;
  },
  loginAuth: async ({ email, password }) => {
    const { data } = await castimAxios.post("auth/login", {
      email: email,
      password: password,
    });
    return data;
  },
  refreshAuth: async () => {
    const { data } = await castimAxios.post(
      "auth/refresh",
      {
        userAgent: window.navigator.userAgent,
      },
      {
        headers: {
          refreshToken: localStorage.getItem("refreshToken"),
        },
      }
    );

    localStorage.setItem("accessToken", data?.accessToken)
    localStorage.setItem("refreshToken", data?.refreshToken)

    castimAxios.defaults.headers.common[
        "Authorization"
    ] = `Bearer ${localStorage.getItem("accessToken")}`;

    return data;
  },
  deletAuth: async () => {
    const { data } = await castimAxios.delete("/auth/logout");
    return data;
  },
};
