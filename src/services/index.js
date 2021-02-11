import axios from 'axios';

const Api = axios.create({
  timeout: 10000,
  baseURL: 'https://desolate-brushlands-20405.herokuapp.com/api/v2/',
});
export default Api;
