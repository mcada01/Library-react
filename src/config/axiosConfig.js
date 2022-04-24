import axios from 'axios'

const BASE_URI = '/api/v1/';

const http = axios.create({
    baseURL: BASE_URI,
    Headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      }
})

export default http