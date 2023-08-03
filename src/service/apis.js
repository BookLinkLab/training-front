import axios from "axios"

const trainingAxios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/comments",
})

export const getComments = async () => {
    const response = await trainingAxios.get()
    return response.data.slice(0, 5)
}
