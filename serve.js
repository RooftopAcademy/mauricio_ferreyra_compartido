const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/detalleProduct', (req, res) => {
    res.sendFile(__dirname + '/detalleProducto.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})

app.get('/tableUser', (req, res) => {
    res.sendFile(__dirname + '/tableUser.html')
})

app.get('/courseVideo', (req, res) => {
    res.sendFile(__dirname + '/courseVideo.html')
})

app.listen(8000)


/**
 * renombrar mi carpeta views por component
 * crear una carpeta views en src para poner los html
 * mover el archivo serve a src y crear un npm start en node.. min 46:00 del profe
 */