//axios es una librería para que podamos hacer llamadas api a un servidor. El postman de React
import axios from 'axios'

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL
})

export default axiosClient