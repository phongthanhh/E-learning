import axios from 'axios'
import { ACCESS_TOKEN, BASE_URL, TOKEN_CYBER } from 'constant'
import { toast } from 'react-toastify'

const axiosClient = axios.create({
  baseURL: BASE_URL
})

axiosClient.interceptors.request.use(
  (configure) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN)
    const newConfigure = {
      ...configure,
      headers: {
        ...configure.headers,
        Authorization: `Bearer ${accessToken}`,
        TokenCybersoft: TOKEN_CYBER
      }

    }
    return newConfigure
  },
  (error) => Promise.reject(error)
)

axiosClient.interceptors.response.use(
  (response) => response.data, // Just get data from response
  (error) => {
    toast.error(error.response?.data)
    return Promise.reject(error)
  }
)

export default axiosClient
