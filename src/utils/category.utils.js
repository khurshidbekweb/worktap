import { castimAxios } from "../config/axios.config"

export const categoryAuth = {
    getCAtegory: async () => {
        const {data} = await castimAxios.get('/category')
        return data
    },
    postCategory: async ({name, parentId}) => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("parentId", parentId)
        const {data} = await castimAxios.post('/category', formData)
        return data
    },
    deletCategory: async (id) => {
        const {data} = await castimAxios(`/category/${id}`)
        return data
    }
}