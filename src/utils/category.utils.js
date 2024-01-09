import { castimAxios } from "../config/axios.config"

export const categoryAuth = {
    getCAtegory: async () => {
        const {data} = await castimAxios.get('/category')
        return data
    },
    postCategory: async ({name, parentId}) => {        
        const {data} = await castimAxios.post('/category', {
            name: name,
            parentId: parentId            
        })
        return data
    },
    deletCategory: async (id) => {
        const {data} = await castimAxios(`/category/${id}`)
        return data
    }
}