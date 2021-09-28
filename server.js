const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())

const Rollbar =require('rollbar')






const port = process.env.PORT || 5656

app.listen(port, () => console.log(`Hippity hoppity your server is on port: ${port}`))