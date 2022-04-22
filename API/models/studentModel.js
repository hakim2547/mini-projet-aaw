<<<<<<< HEAD
const mongoose = require("mongoose")
//structre off the model
const StudentSchema = mongoose.Schema({

    header: {
        type: String,
        required: [true, "the student must have a numberID"]
     },

     AAW_note : {
         type:Number,
         required: [true, "the student must have a note"] 
     },

     CSE_note : {
        type:Number,
        required: [true, "the student must have a note"] 
    },
    IGR_note : {
        type:Number,
        required: [true, "the student must have a note"] 
    },
    GCC_note : {
        type:Number,
        required: [true, "the student must have a note"] 
    },
    MSCC_note : {
        type:Number,
        required: [true, "the student must have a note"] 
    },
    
    complaint : {
    type : String, 
    default:"no complaints"
    },

   

})

=======
const mongoose = require("mongoose")
//structre off the model
const StudentSchema = mongoose.Schema({

    header: {
        type: String,
        required: [true, "the student must have a numberID"]
     },

     AAW_note : {
         type:Number,
         required: [true, "the student must have a note"] 
     },

     CSE_note : {
        type:Number,
        required: [true, "the student must have a note"] 
    },
    IGR_note : {
        type:Number,
        required: [true, "the student must have a note"] 
    },
    GCC_note : {
        type:Number,
        required: [true, "the student must have a note"] 
    },
    MSCC_note : {
        type:Number,
        required: [true, "the student must have a note"] 
    },
    
    complaint : {
    type : String, 
    default:"no complaints"
    },

   

})

>>>>>>> 049587edd300ea1853d310c2d71d5c7e886d2577
module.exports = mongoose.model("Student", StudentSchema)