import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT;

//Get current path
const __filename = url.fileURLToPath(import.meta.url); //in CommonJS module we get these 2 var bydefault
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {

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
            let filePath;
            if (req.url === '/') {
                // res.writeHead(200, { 'content-type': 'text/html' })
                // res.end(`<h1>Home</h1>`)  instead this send html doc
                filePath = path.join(__dirname, 'public', 'index.html');
            }
            else if (req.url === '/about') {
                // res.writeHead(200, { 'content-type': 'type/html' })
                // res.end(`<h1>About</h1>`)
                filePath = path.join(__dirname, 'public', 'about.html');
            }
            else {
                // res.writeHead(404, { 'content-type': 'type/html' })
                // res.end(`Not found`)
                throw new Error("Not found")
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
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