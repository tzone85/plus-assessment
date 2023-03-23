import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API}/api`
})

// interceptors to be executed before sent or after request is received

axiosClient.interceptors.request.use(( config) => {

    const token = localStorage.get('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

axiosClient.interceptors.response.use((response) => {
    console.log('successful response: ', response)
    return response;
}, (error) => {
    const {response} = error;

    /**
     * if the token has expired or is incorrect
     */
    if (response.status === 401) {
        localStorage.removeItem('ACCESS_TOKEN')
    }

    throw error;
})

export default axiosClient;
