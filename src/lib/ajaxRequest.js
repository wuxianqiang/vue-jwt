import axios from 'axios';

class AjaxRequest {
  // baseURL
  constructor () {
    // this.baseURL = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000';
    this.baseURL = 'https://easy-mock.com/mock/5cbeb6de8968371da414c81b/admin';
    this.timeout = 3000; // 超时时间
  }
  merge (options) {
    // 合并配置参数
    return {...options, baseURL: this.baseURL, timeout: this.timeout}
  }
  setInterceptor (instance) { // 每次请求都会加loading
    // 响应拦截和请求拦截的使用
    instance.interceptors.request.use((config) => {
      return config;
    })
    instance.interceptors.response.use((res) => {
      return res.data;
    })
  }
  request (options) {
    // 通过创建实例
    let instance = axios.create();
    this.setInterceptor(instance);
    let config = this.merge(options);
    return instance(config); // axios执行返回的是promise
  }
}

export default new AjaxRequest()

// xxx.request({
//   url: '/user',
//   method: 'get'
// })
