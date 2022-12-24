const http = require('http');
const { delay } = require('./tree-cli');

const ppPort = 3112;
const ppAddr = `192.168.1.145:${port}`;

http.get(ppAddr, (req, res) => {
  delay();
});

delay();