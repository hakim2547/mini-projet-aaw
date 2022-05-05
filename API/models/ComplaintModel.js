const mongoose = require("mongoose")
//structre off the model
const ComplaintSchema = mongoose.Schema({

  
    complaint : {
        type:String,
        default:"there is no complaint"
    },
    
   
})

module.exports = mongoose.model("Complaint", ComplaintSchema)