import axios from "axios";
import { baseURL } from "./library/baseURL";

const apiClient = axios.create({
    baseURL:"http://localhost:3015",
    timeout:1000,
})

export const login = async (data) =>{
    console.log({data});
    try {
        return await apiClient.post("/auth/login",data);
    } catch(e){
        return {
            error:true,
            e
        }
    }
}