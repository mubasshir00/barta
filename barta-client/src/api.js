import axios from "axios";

const apiClient = axios.create({
    baseURL : 'http://localhost:3015/api',
})

export const login = async(data) =>{
    try {
        
     return await apiClient.post("/login",data);
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