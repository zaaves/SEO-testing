import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  // baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;
