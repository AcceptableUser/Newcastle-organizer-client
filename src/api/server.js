import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 100000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})