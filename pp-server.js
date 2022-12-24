const http = require('http');
const { delay } = require('./tree-cli');

const hostname = '192.168.1.145';
const port = 3112;

const server = http.createServer((req, res) => {
  delay();
});

server.listen(port, hostname, () => {
  // console.log(`PP Server running at http://${hostname}:${port}/`);
});