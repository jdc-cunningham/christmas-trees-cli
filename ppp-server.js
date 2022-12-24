const http = require('http');
const { delay } = require('./tree-cli');

const hostname = '127.0.0.1';
const port = 3111;
const ppAddr = `192.168.1.150:${port}`;

const server = http.createServer((req, res) => {
  // call pp
  http.get(ppAddr, () => {
    delay();
  });
});

server.listen(port, hostname, () => {
  // 
});