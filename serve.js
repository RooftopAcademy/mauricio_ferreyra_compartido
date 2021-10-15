const http = require('http')
const fs = require('fs')

const express = {
    html: function (res, path){
        let content = fs.readFileSync(path)
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })
        res.write(content)
    }
}

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
        express.html(res,'./index.html')
    }

    if (req.url == '/detalleProduct') {
        express.html(res,'./detalleProducto.html')
    }

    if (req.url == '/login') {
        express.html('./login.html')
    }

    if (req.url == '/tableUser') {
        express.html(res,'./tableUser.html')
    }

    if (req.url == '/courseVideo') {
        express.html(res,'./courseVideo.html')
    }
    

    res.end()
}).listen(4444)
