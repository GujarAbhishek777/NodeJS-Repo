const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><ul><a href="/home"><li>Home</li</a><a href="/about"><li>About</li></a><a href="/node"><li>Node</li></a></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/home') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page on NodeJS</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        res.end();
    }
    if (url === '/about') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page on NodeJS</title></head>');
        res.write('<body><h1>Welcome to about us Page</h1></body>');
        res.write('</html>');
        res.end();
    }
    if (url === '/node') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page on NodeJS</title></head>');
        res.write('<body><h1>Welcome to My NodeJS Project</h1></body>');
        res.write('</html>');
        res.end();
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page on NodeJS</title></head>');
    res.write('<body><h1>Abhishek Gujar</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);