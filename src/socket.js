import Vue from 'vue';
import Socket from './plugin/socket'
import Store from './store'
import config from './config'

Vue.use(Socket)

class RegisterSocket {
  constructor () {
    this.url = 'ws://localhost:8888'
    this.store = Store
  }
  onmessage ({data}) {
    let { code } = data
    let fn = config[code]
    Store.dispatch(fn)
  }
  onopen ({ws}) {
    console.log('连接打开')
    this.timer = setInterval(() => {
      ws.send('hello')
    }, 2000);
  }
  onclose () {
    clearInterval(this.timer)
    console.log('连接中断')
  }
  onerror () {
    clearInterval(this.timer)
    console.log('连接中断')
  }
}


export default new Socket.Create(new RegisterSocket)
