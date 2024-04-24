const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { config } = require('dotenv')
config()

const gymUserRoutes = require('./routes/gym.routes')

const app = express()
app.use(bodyParser.json())

// TODO: connect data base

//
app.use('/users', gymUserRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`prueba de puerto ${port}`)
})
