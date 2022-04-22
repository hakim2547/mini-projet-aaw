<<<<<<< HEAD
const mongoose = require("mongoose")

// Connect Database 
const connectDateBase = async () => {

   try {
      const conn = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true
     }).connection
      console.error(`connect to DB`)
   } catch (error) {
      console.log(error)
      process.exit(1)
   }

}


=======
const mongoose = require("mongoose")

// Connect Database 
const connectDateBase = async () => {

   try {
      const conn = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true
     }).connection
      console.error(`connect to DB`)
   } catch (error) {
      console.log(error)
      process.exit(1)
   }

}


>>>>>>> 049587edd300ea1853d310c2d71d5c7e886d2577
module.exports = connectDateBase