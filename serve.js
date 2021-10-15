const express = require('express')
const app = express()
const dotenv = require('dotenv')

const courses = require('./src/data/courses.json')
const users = require('./src/data/users.json')

dotenv.config()

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

/**
 * 
 * return the json courses
 * 
 */
app.get('/api/courses', (req, res) => {
    res.json(courses)
})

app.get('/api/users', (req, res) => {
    res.json(users)
})

app.listen(process.env.PORT)