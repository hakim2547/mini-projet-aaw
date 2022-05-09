const mongoose = require("mongoose")
//structre off the model
const EtudiantSchema = mongoose.Schema({

    
     etud_name : {
         type:String,
         required : true 
     }
    
     

})

module.exports = mongoose.model("Etudiant", EtudiantSchema)