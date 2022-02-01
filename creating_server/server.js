const http = require("http");
const server = http.createServer((req, res) => {
  res.write("hello ninjas");
  res.end();
});

server.listen(1338);
