import { castimAxios } from "../config/axios.config"

export const orderUtils = {
    getAllOrderUtils: async () => {
        const {data} = await castimAxios.get('order/all')
        return data
    },
    getOrderUtils: async () => {
        const {data} = await castimAxios.get('order')
        return data
    },
    postOrder: async ({categoryId, description, name, price, files}) => {
        const formData = new FormData()
        for(const file of files){
            formData.append("files", file)
        }
        formData.append("categoryId", categoryId)
        formData.append("description", description)
        formData.append("name", name)
        formData.append("price", price)
        const {data} = await castimAxios.post('order/add', formData)
        
        return data
    },
    deletOrder: async (id) => {
        const {data} = await castimAxios.delete(`/order/delete/${id}`)
        return data
    }
}