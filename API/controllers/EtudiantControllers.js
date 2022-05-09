const asyncHandler = require('express-async-handler') //
//hada 
const Note = require('../Models/NoteModel')
const Complaint = require('../Models/ComplaintModel')



//GET note from NoteModel by note findbyname hna requete 
const getNote = asyncHandler(async (req, res) => {
    try {
       // this line get all notes from db 
       // const nnote = await Note.find()
        const note = await Note.findById(req.params.id)
       res.status(200).json(note)
    } catch (error) {
       res.status(500).json({
          massage: "Some errors"
       })
    }
 })



// POST /api/Note/ (Private)    POst Complaint 
const postComplaint = asyncHandler(async (req, res) => {
    //Lazem ykoun the same in the model        
   const comp = await Complaint.create({
    complaint : req.body.complaint
   })
   
   res.status(201).json(comp)

})


module.exports = {
  getNote, 
  postComplaint

}