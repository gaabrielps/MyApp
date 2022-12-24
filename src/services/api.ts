import axios from "axios";

 const api = axios.create({
    baseURL: 'https://api.staging.aca.so'
})

api.interceptors.response.use((response) =>{
    console.log('RESPONSE =>', response)
    return response
}, (error) => {
    console.log('Error =>', error)
    return Promise.reject(error)
});



export {api}