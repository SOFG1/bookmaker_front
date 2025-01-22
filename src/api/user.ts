import axios from "axios"
import { API_URL } from "."


export const userApi = {
    signUp(email: string, password: string) {
        return axios.post(`${API_URL}/user/sign-up`, {email, password})
    },
    signIn(email: string, password: string) {
        return axios.post(`${API_URL}/user/sign-in`, {email, password})
    },
}