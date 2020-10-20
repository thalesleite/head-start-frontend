import axios from 'axios';

const dev = 'http://localhost:3333';
const qa = 'https://head-start-app.herokuapp.com/';
const prod = 'https://headstartcourses.ie/';

const api = axios.create({
    baseURL: prod,
    //baseURL: qa,
    //baseURL: dev,
});

export default api;