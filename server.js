const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())

const Rollbar =require('rollbar')

const rollbar = new Rollbar({
    accessToken: 'a3781565c54749c8938e472b67078734',
    captureUncaught: true,
    captureUnhandledRejections: true
})



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info('html was monitored successfully!')
})

app.get('/api/test', (req, res) => {
    try {
        nonExistentFunction();
      } catch (error) {
        console.error(error);
      }        
})


const port = process.env.PORT || 5656

app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`Hippity hoppity your server is on port: ${port}`))