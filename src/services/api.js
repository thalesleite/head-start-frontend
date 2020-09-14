import axios from 'axios';

const dev = 'http://localhost:3333';
const prod = 'https://head-start-app.herokuapp.com/';

const api = axios.create({
    baseURL: prod,
    //baseURL: dev,
});

export default api;