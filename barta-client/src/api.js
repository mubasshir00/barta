import axios from "axios";
import { logout } from "./shared/utils/auth";

const apiClient = axios.create({
    baseURL : 'http://localhost:3015/api',
})

//before every request this logic will be executed
apiClient.interceptors.request.use((config)=>{
    const userDetails = localStorage.getItem('user');

    if(userDetails){
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
},(err)=>{
    return Promise.reject(err);
})

//public routes
export const login = async(data) =>{
    try {
    const loginData = {
      emailOrPhone: data.mail,
      password: data.password,
    };
     return await apiClient.post("/login", loginData);
    } catch(e){
        return {
            error:true,
            e,
        }
    }
}

export const register = async (data) =>{
    try{
        console.log({data});
        const registerData = {
          //             mail: "aa@gmail.com"
          // password: "12345678"
          // username: "aaa111"
          name: "name not provider",
          emailOrPhone: data.mail,
          password: data.password,
          userName: data.username,
        };
        return await apiClient.post("/register", registerData);
    } catch (e){
        return {
            error:true,
            e,
        }
    }
}

//secure routes
const checkResponseCode = (exception) =>{
    const responseCode = exception?.response?.status;

    if(responseCode){
        (responseCode === 401 || responseCode === 403) && logout();
    }
}