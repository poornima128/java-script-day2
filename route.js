const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/')
    {
        res.end('enna kaipulla epadi iruka');
    }
    else if(req.url === '/about')
    {
        res.end('Basically i am sweet ,,, if you are bad I am your dad');
    }
    else if(req.url === '/contact')
    {
        res.end('Enna contact panradhuku ni summavey irukalam,varataaa mamaey!');
    }
    else if(req.url === '/profile')
    {
        res.end('I am Raji. your name, I am good Dancer.sari idhellam ketu ni ena panapora ni poitu un wrk paaru poooo!')
    }
    {
        res.statusCode = 404;
        res.end('page not found');
    }
});

server.listen(3000);