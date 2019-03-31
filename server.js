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

app.get('/user', (req, res) => {
  res.json('hello')
})

app.listen(3000, () => {
  console.log('server start')
});
