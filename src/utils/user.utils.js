import { castimAxios } from "../config/axios.config"

export const userUtils = {
    getAllUser: async () => {
        const {data} = await castimAxios.get('/user/all')
        return data
    },
    getUser: async () => {
        const {data} = await castimAxios.get('user/single')
        return data
    },
    postUser: async ({id, image, phone, password, surname, name}) => {
        const formData = new FormData()
        formData.append("image", image)
        formData.append("surname", surname)
        formData.append("phone", phone)
        formData.append("password", password)
        formData.append("name", name)
        const {data} = await castimAxios.post(`user/edit/${id}`, formData)
        console.log(formData);
        return data
    },
    deleteUser: async (id) => {
        const {data} = await castimAxios.delete(`user/delete/${id}`)
        return data
    }
}