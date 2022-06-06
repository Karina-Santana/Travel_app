const express = require('express')

// middlewares
const logger = require('./middlewares/logger')

const app = express()
const port = 8000

app.listen(port, () => console.log(`listening on port ${port}`))

app.use(logger)

app.use(express.static('client'))