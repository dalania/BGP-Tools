import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.99.141:5000/',
});

export default api;
