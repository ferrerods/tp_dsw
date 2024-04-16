const express = require('express')
const { config } = require('dotenv')
config()

const app = express()
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`prueba de puerto ${port}`)
})
