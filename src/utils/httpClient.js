//axios 封装
const axios = require('axios')
// const defaulturl = "http://localhost:8081/Books"
const httpclient = axios.create({
  // baseURL: defaulturl,
  timeout: 20000,
  // headers: {
  //   "Content-type": "application/json;charset=UTF-8"
  // }
})
//请求拦截器  再发请求之前，请求拦截器可以检测到 可以在发请求之前做一些事情
httpclient.interceptors.request.use(config => {
  // Do something before request is sent  config配置对象 有个属性header 请求头
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});
//响应拦截器
httpclient.interceptors.response.use(response => {
  // response 成功的回调函数
  return response;
}, error => {
  // 响应失败的信息
  return Promise.reject(error);
});


//对外暴露
export default httpclient