consthttp = require('http');
var server = http.createServer((req,res) => {
    res.end('Hello College Server');
});

server.listen(3000);