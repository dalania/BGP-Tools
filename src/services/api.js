import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.220.0.15:5000/',
});

export default api;
