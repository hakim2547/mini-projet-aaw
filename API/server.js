require("dotenv").config()
const express = require('express')
const app = express()

//const {  errorController} = require("./middleware/errorsMiddleware")

//hada
const connectDb = require('./config/db')


connectDb()

const port = process.env.PORT || 5000

// Midelwares

app.use(express.json())
app.use(express.urlencoded({
   extended: false
}))

// Routes
app.use('/api/Enseignant', require('./routes/Enseignant'))
app.use('/api/Etudiant', require('./routes/Etudiant'))
//app.use('/api/clients', require('./routes/clients'))



// Error Middelwar
//app.use(errorController)


app.listen(port, () => console.log("server starting in port :" + port))