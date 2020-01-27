const http = require('http');
const express = require('express');
const app = new express();
const path = require('path');
const router = express.Router();
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;

  router.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
  });
  
  app.use('/', router);
  app.listen(process.env.port || 3001);
});




server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});