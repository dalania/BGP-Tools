import axios from 'axios';

export default axios.create({
  baseUrl: 'http://192.168.1.12:5000/',
});