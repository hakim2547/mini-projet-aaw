const asyncHandler = require('express-async-handler') //
//hada 
const Note = require('../Models/NoteModel')
const Complaint = require('../Models/ComplaintModel')
const etu = require('../Models/EtudiantModel')



/* GET /api/Student (Private)
const getStudent = asyncHandler(async (req, res) => {
   try {
      const student = await Student.find()
      res.status(200).json(student)
   } catch (error) {
      res.status(500).json({
         massage: "Some errors"
      })
   }
})

// GET /api/Student (Private)
const getOnestudent = asyncHandler(async (req, res) => {
   try {
      const student = await Student.findById(req.params.id)
      res.status(200).json(student)
   } catch (error) {
      res.status(500).json({
         massage: "Some errors"
      })
   }
})*/



// POST /api/Note/ (Private)
const setNote = asyncHandler(async (req, res) => {
                       //Lazem ykoun the same in the model        
   const notee = await Note.create({
      x_note :req.body.x_note,
      x_name :req.body.x_name

   })
   
   res.status(201).json(notee)

})
// PUT /api/Note/:id (Private)
const updateNote = asyncHandler(async (req, res) => {
   //find by name of the student
   const note_stu = await Note.findById(req.params.id)

   if (!note_stu) {
      res.status(400)
      throw new Error("L'étudiant n'exsiste pas ")
   }

   const updateNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true
   })

   res.status(200).json(updateNote)
})

const getComplaint = asyncHandler(async (req, res) => {
   try {
      const complaint = await etu.find()
      res.status(200).json(complaint)
   } catch (error) {
      res.status(500).json({
         massage: "Some errors"
      })
   }
})

// DELETE /api/Student/:id (Private) 
/*const deletestudent = asyncHandler(async (req, res) => {
   const student = await Student.findById(req.params.id)

   if (!student) {
      res.status(400)
      throw new Error("Dont Found student")
   }

   await student.remove()
   res.status(200).json({
      id: req.params.id,
      massage: "student Removed"
   })
})*/


module.exports = {
   setNote,
   updateNote,
   getComplaint,
}