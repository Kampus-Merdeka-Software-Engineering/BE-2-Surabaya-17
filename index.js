// import library http
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'}); 
        res.end('ini adalah halaman utama');
    } else if(req.url == '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.end('ini adalah halaman about us');
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'}); 
        res.end('ini adalah halaman utama');
    }
})

const port=8080;
server.listen(port, () => {
    console.log('Server running on port ${port}');
})






