const express = require('express')

// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')


// controllers
const tripsController = require('./controllers/trips_controller')
const itinerariesController = require('./controllers/itineraries_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')


const app = express()
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`listening on port ${port}`))

app.use(logger)

app.use(express.static('client'))

app.use(express.json())

app.use(sessions)

app.use('/api/trips', tripsController)
app.use('/api/itineraries', itinerariesController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)