const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', '3.2.1')
  if(req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

let WebSocketServer = require('ws').Server
// 用WS 模块启动一个websocket服务器，监听8888端口
let wsServer = new WebSocketServer({
  port: 8888
})
// 监听客户端的链接请求， 当客户端链接服务器的时候，就会触发connection事件
// socket代表一个客户端，不是所有客户端共享的，而是每个客户端都要一个socket
wsServer.on('connection', (socket) => {
  console.log('客户端连接成功')
  // 监听对方发送的消息
  socket.on('message', (message) => {
    console.log('接收到客户端的消息', message)
    socket.send(JSON.stringify({code: 200}))
  })
})

app.get('/user', (req, res) => {
  res.json('hello')
})

app.listen(3000, () => {
  console.log('server start')
});
