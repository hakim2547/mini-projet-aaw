<<<<<<< HEAD
require("dotenv").config()
const express = require('express')

const connectDateBase = require('./config/db')
const app = express()

connectDateBase()

const port = process.env.PORT || 5000

// Midelwares
app.use(express.json())
app.use(express.urlencoded({
   extended: false
}))

// Routes
app.use('/api/student', require('./routes/student'))



=======
require("dotenv").config()
const express = require('express')

const connectDateBase = require('./config/db')
const app = express()

connectDateBase()

const port = process.env.PORT || 5000

// Midelwares
app.use(express.json())
app.use(express.urlencoded({
   extended: false
}))

// Routes
app.use('/api/student', require('./routes/student'))



>>>>>>> 049587edd300ea1853d310c2d71d5c7e886d2577
app.listen(port, () => console.log("server starting in port :" + port))