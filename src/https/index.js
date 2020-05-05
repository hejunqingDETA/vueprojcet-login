
import axios from 'axios'

axios.interceptors.request.use(function (config) {
  //判断是否本地存储有token字符串
  let token = localStorage.getItem('token')
  //如果有,默认放入headers,这样每次请求时就不需要单独配置headers了
    if(token){
    config.headers['Authorization'] ='token'+token;
  }
    //必须记得写上,否则请求会被终止
    return config;
  }, function (error){
    // 对请求错误做些什么
    return Promise.reject(error);
});