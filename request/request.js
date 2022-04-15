/**
 * 网络请求配置
 */
import axios from 'axios';
import Cookies from 'js-cookie';

let baseURL = process.env.BASE_URL;

const request = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
  },
  timeout: 5000,
});

/**
 * http request 拦截器
 */
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么

    /**
     * 判断接口是否需要token
     * 需要则添加请求头
     */
    const token = Cookies.get('token');
    /* if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      window.location.href = '/login';
    } */

    config.data = JSON.stringify(config.data);

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

/**
 * http response 拦截器
 */
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default request;
