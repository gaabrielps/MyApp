import axios, { AxiosInstance } from "axios";

type SignOut = () => void

type APIInstanceProps = AxiosInstance & {
    registerInterceptTokenManager: (SignOut: SignOut) => () => void
}

 const api = axios.create({
    baseURL: 'https://api.staging.aca.so'
}) as APIInstanceProps

api.registerInterceptTokenManager = SignOut => {
    const InterceptTokenManager = api.interceptors.response.use((response) =>{
        console.log('RESPONSE =>', response)
        return response
    }, (error) => {
        console.log('Error =>', error)
        return Promise.reject(error)
    });

    return () => {
        api.interceptors.response.eject(InterceptTokenManager)
    }

}





export {api}