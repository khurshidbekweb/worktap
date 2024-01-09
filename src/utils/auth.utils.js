import { castimAxios } from "../config/axios.config"

export const authUtils = {
    registerAuth: async ({email, name, password, phone, roles, surname }) => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("phone", phone)
        formData.append("roles", roles)
        formData.append("surname", surname)
        formData.append("userAgent", window.navigator.userAgent)
        const {data} = castimAxios.post('/auth/register', formData)
        return data
    },
    loginAuth: async ({email, password}) => {
        const formData = new FormData()
        formData.append("email", email)
        formData.append("password", password)
        formData.append("userAgent", window.navigator.userAgent)
        const {data} = await castimAxios.post('auth/login', formData)
        return data
    },
    refreshAuth: async () => {
        const {data} = await castimAxios.post('auth/refresh', window.navigator.userAgent)
        return data
    },
    deletAuth: async () => {
        const {data} = await castimAxios.delete('/auth/logout')
        return data
    }
}