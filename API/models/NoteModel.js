const mongoose = require("mongoose")
//structre off the model
const NoteSchema = mongoose.Schema({

    

     x_note : {
         type:Number,
         required: true, min: 0 , max : 20 
     },

     x_name: {
         type:String,
         required: [true , "module name "]
     },

     etud : 
        {
            type:String , ref : 'Etudiant'
   
        }
     
    
     

})

module.exports = mongoose.model("Note", NoteSchema)