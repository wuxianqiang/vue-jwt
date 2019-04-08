let Vue;
class Create {
  constructor (options = {}) {
    this.url = options.url;
    this.store = options.store;
    this.ws = null;
    this.options = options
  }
  init () {
    // 创建连接
    if (this.ws && this.ws.readyState === 1) {
      this.disconnect()
    }
    let ws = this.ws = new WebSocket(this.url);
    let methods = ['onmessage', 'onerror', 'onopen', 'onclose'];
    methods.forEach(method => {
      ws[method] = (event) => {
        let data = {}
        try {
          data = JSON.parse(event.data)
        } catch (error) {
          data = {}
        }
        this.options[method] && this.options[method]({ws, data})
      }
    })
  }
  disconnect () {
    // 断开连接
    this.ws && this.ws.close()
  }
}


const install = (_Vue) => {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if(this.$options && this.$options.socket){
        this.$socket = this.$options.socket;
      }else{
        this.$socket = this.$parent && this.$parent.$socket
      }
    },
  })
}

export default {
  Create,
  install
}