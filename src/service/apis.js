import axios from "axios"

const trainingAxios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/comments",
})

export const getComments = async () => {
    const response = await trainingAxios.get()
    // Utilizamos el slice para limitar la cantidad de comentarios a 5 ya que la api trae 500
    return response.data.slice(0, 5)
}
