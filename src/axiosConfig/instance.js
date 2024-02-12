import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: 'https://api.themoviedb.org/3/movie/popular',
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '90bc18c6f50ded3394f5db8e600ded4a'
    }
})

export default axiosInstance