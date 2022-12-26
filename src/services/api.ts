import axios, { AxiosInstance } from "axios";
import { storageAuthTokenGet } from "../storage/storageAuthToken";
import { AppError } from "../utils/AppError";

type SignOut = () => void

type PromiseType = {
    resolve: (value?: unknown) => void
    reject: (reason?: unknown) => void
}

type APIInstanceProps = AxiosInstance & {
    registerInterceptTokenManager: (SignOut: SignOut) => () => void
}

 const api = axios.create({
    baseURL: 'https://api.staging.aca.so'
}) as APIInstanceProps

let isRefreshing = false
let failedQueue: Array<PromiseType> = [];

api.registerInterceptTokenManager = SignOut => {
    const InterceptTokenManager = api.interceptors.response.use(response => response, async requestError =>{
        //se ocorrer um de token
        if(requestError?.response?.status == 401) {
            if(requestError.response.data?.message == 'token.expired' || requestError.response.data?.message == 'toke.invalid' ){
                const oldToken = await storageAuthTokenGet()

                if(!oldToken) {
                    SignOut()
                    return Promise.reject(requestError)
                }

                const originalResquest = requestError.config
                if(isRefreshing) {
                    return new Promise((resolve, reject) => {
                        failedQueue.push({resolve, reject})
                    })
                        .then((token) => {
                            originalResquest.headers.Authorization = `Bearer ${token}`
                            return axios(originalResquest)

                        })
                        .catch((error) => {
                            throw error;
                        })
                }

                isRefreshing = true

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