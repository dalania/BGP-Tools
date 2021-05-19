import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.50.49:5000/',
});

export default api;
