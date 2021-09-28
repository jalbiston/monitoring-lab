const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())

const Rollbar =require('rollbar')

const rollbar = new Rollbar({
    accesToken: '',
    captureUncaught: true,
    captureUnhandledRejections: true
})



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info('html was monitored successfully!')
})


const port = process.env.PORT || 5656

app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`Hippity hoppity your server is on port: ${port}`))