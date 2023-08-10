import axios from "axios"

const trainingAxios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/comments",
})

export const getComments = async () => {
    const response = await trainingAxios.get("")
    return response.data.slice(0, 5)
}

export const getComment = async (id) => {

    const response = await trainingAxios.get(id)
    return response.data
    // const mock = {
    //     id: 1,
    //     name: "id labore ex et quam laborum",
    //     body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et"
    // }
    // return mock;
}