const mongoose = require("mongoose")

// Connect Database 
const connectDataBase = async () => {

   try {
      const conn = await mongoose.connect("mongodb://localhost/blog" )
      console.error(`connect to DB`)
   } catch (error) {
      console.log(error)
      process.exit(1)
   }

}


module.exports = connectDataBase