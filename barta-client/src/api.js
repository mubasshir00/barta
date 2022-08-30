import axios from "axios";
import { logout } from "./components/utils/auth";

const apiClient = axios.create({
    baseURL: 'http://localhost:3015',
    timeout:1000
});

apiClient.interceptors.request.use((config)=>{
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token};`
    }
    return config;
},(err)=>{
    return Promise.reject(err);
})

//public routes

export const login = async (data) =>{
    try {
        return await apiClient.post("/api/auth/login", data);
    } catch(exception){
        return {
            error : true,
            exception ,
        }
    }
}

export const register = async (data) =>{
    try {
        return await apiClient.post("/api/auth/register", data);
    } catch(exception){
        return {
          error: true,
          exception,
        };
    }
}

export const sendFriendInvitation = async(data) =>{
    try {
        return await apiClient.post("/friend-invitation/invite",data);
    } catch (expection) {
        checkResponseCode(expection);
      return {
        error: true,
        expection,
      };
    }
}

//secure routes 
const checkResponseCode = (expection) =>{
    const responseCode = expection?.response?.status;

    if(responseCode){
        (responseCode === 401 || responseCode === 403) && logout();
    }
}