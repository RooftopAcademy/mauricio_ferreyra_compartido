const http = require('http')
const fs = require('fs')


http.createServer((req, res) => {

    if (req.url == '/dist/bundle.js') {
        let content = fs.readFileSync('./' + req.url)
        res.write(content)
    }

    if (req.url.includes('.css')) {
        let content = fs.readFileSync('./' + req.url)
        res.write(content)
    }

    if (req.url == '/') {
        let content = fs.readFileSync('./index.html')
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        res.write(content)
    }

    if (req.url == '/detalleProduct') {
        let content = fs.readFileSync('./detalleProducto.html')
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        res.write(content)
    }

    if (req.url == '/login') {
        let content = fs.readFileSync('./login.html')
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        res.write(content)
    }

    if (req.url == '/tableUser') {
        let content = fs.readFileSync('./tableUser.html')
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        res.write(content)
    }

    if (req.url == '/courseVideo') {
        let content = fs.readFileSync('./courseVideo.html')
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        res.write(content)
    }

    res.end()
}).listen(4444)
