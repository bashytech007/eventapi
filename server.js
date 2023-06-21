const express = require('express')
require('express-async-errors')
const cors = require('cors')
const connectDB = require('./src/database/index')
const dotenv = require('dotenv').config()
const router = require('./src/router/index')
const eventRouter = require('./src/router/events')
const errorHandlerMiddleWare = require('./src/middleware/errorHandler')
const notFound = require('./src/middleware/not-found')

const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())

app.use('/events', eventRouter)

app.use('/', router)

const Port = process.env.PORT

app.get('/', (req, res) => {
  res.send('hello')
})

app.use(errorHandlerMiddleWare)
app.use(notFound)

connectDB().then((con) => {
  console.log(`DATABASE IS CONNECTED`)
})
app.listen(Port, console.log(`app running on ${Port}`))
