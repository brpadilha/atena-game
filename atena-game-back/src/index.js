require('dotenv').config()
const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
// const { setupWebSocket } = require('./websocket')

const app = express()
const server = http.Server(app)

// setupWebSocket(server)
mongoose.connect(process.env.MONGO_ATLAS_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	autoIndex: true,
})

app.use(cors())
app.use(express.json())

app.use(routes)

server.listen(3333)
