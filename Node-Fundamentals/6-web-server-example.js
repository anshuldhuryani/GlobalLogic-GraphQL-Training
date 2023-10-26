
// Import NodeJS Core Module
const http = require('http');

// Creating the Web Server
var server = http.createServer((req, res)=> {
    // Handle Incoming Request Here..
    res.writeHead(200, { 'Content-Type': 'text/html'})
    if(req.url == '/') {
        res.write('<h2>Hello Folks!!</h2>');
        res.end();
    } else if(req.url == '/user') {
        res.write('<h2>User Portal!!</h2>');
        res.end();
    } else if (req.url == '/admin') {
        res.write('<h2>Admin Portal</h2>');
        res.end();
    } else if (req.url == '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json'})
        res.write(JSON.stringify({message: 'Hello Everyone!!'}))
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html'})
        res.write('<h2>Invalid Request!!</h2>');
        res.end();
    }
})

server.listen(5000, () => {
    console.log('The server is running at port 5000!!');
})