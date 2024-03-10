const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.write("Frist Route");
    res.end();
  }
});

server.listen("5000", "127.0.0.1", () => {
  console.log("Server run on 5000 port");
});
