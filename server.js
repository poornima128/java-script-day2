const http = require('http');

const server = http.createServer((req,res) => {
    res.end('Hello College Server');
});

server.listen(3000);

//http://localhost:3000