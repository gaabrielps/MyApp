import axios, { AxiosInstance } from "axios";
import { AppError } from "../utils/AppError";

type SignOut = () => void

type APIInstanceProps = AxiosInstance & {
    registerInterceptTokenManager: (SignOut: SignOut) => () => void
}

 const api = axios.create({
    baseURL: 'https://api.staging.aca.so'
}) as APIInstanceProps

api.registerInterceptTokenManager = SignOut => {
    const InterceptTokenManager = api.interceptors.response.use(response => response, requestError =>{
        //se ocorrer um de token
        if(requestError?.response?.status == 401) {
            if(requestError.response.data?.message == 'token.expired' || requestError.response.data?.message == 'toke.invalid' ){

            }

            SignOut()
        }
        
        
        
        
        if(requestError.response && requestError.response.data){
            return Promise.reject(new AppError(requestError.response.data.message))
        } else {
            return Promise.reject(requestError)
        }
    })

    return () => {
        api.interceptors.response.eject(InterceptTokenManager)
    }

}





export {api}