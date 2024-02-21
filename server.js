const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/subscribers')
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to database"))

app.listen(3000, () => console.log("Server Started"))

const subscribersRouter = require('./routes/subscribers')

app.use('/subscribers', subscribersRouter)