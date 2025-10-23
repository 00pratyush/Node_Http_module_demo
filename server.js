import http from 'http';

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {


    console.log(req.url);
    console.log(req.method);

    // res.setHeader('content-type','text/html');     //text/plain
    // res.statusCode = 404;
    // res.writeHead(200, {'content-type':'application/json'})
    // res.end(JSON.stringify({message: 'Server connected'}))

    // res.write('<h1>Hello world</h1>');
    // res.end('<h1>Hello world</h1>');

    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.end(`<h1>Home</h1>`)
            }
            else if (req.url === '/about') {
                res.writeHead(200, { 'content-type': 'type/html' })
                res.end(`<h1>About</h1>`)
            }
            else {
                res.writeHead(404, { 'content-type': 'type/html' })
                res.end(`Not found`)
            }
        }
        else {
            console.log(123)
            throw new Error('Method not allowed')
        }
    } catch (error) {
        res.writeHead(500, { 'content-type': 'type/plain' })
        res.end(`Server Error`)
    }
    

})

server.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`)
})