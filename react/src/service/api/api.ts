// api.js
import axios from 'axios';

export const URL = 'http://localhost:8080/v1/api'

const api = axios.create({
  baseURL: URL,
  withCredentials: true, // ESSENCIAL para enviar cookies
});



export default api;

