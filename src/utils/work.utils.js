import { castimAxios } from "../config/axios.config"

 export const workUtils = {
    getAllWork: async () => {
        const {data} = await castimAxios.get('work/all')
        return data
    },
    getWork: async () => {
        const {data} = await castimAxios.get('work')
        return data
    },
    postWork: async ({image, description, name, price}) => {
        const formData = new FormData()
        formData.append("image", image)
        formData.append("description", description)
        formData.append("name", name)
        formData.append("price", price)
        const {data} = await castimAxios.post('work/add', formData)
        return data
    },
    deleteWork: async (id) => {
        const {data} = await castimAxios.delete(`work/delete/${id}`)
        return  data
    }
 }