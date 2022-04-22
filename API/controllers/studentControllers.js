const asyncHandler = require('express-async-handler') 
const Students = require('../models/studentModel')



// GET /api/students (Private)
const getStudents = (req, res) => {

      res.status(200).json({
         massage : "get students"
      })

   }

// GET /api/students (Private)
const getOneStudent = asyncHandler(async (req, res) => {
   try {
      const student = await Students.findById(req.params.id)
      res.status(200).json(student)
   } catch (error) {
      res.status(500).json({
         massage: "Some errors"
      })
   }
})
// POST /api/students/ (Private)
const setStudent = asyncHandler(async (req, res) => {


   const student = await Students.create({

      header: req.body.header,
      AAW_note: req.body.AAW_note,
      CSE_note: req.body.CSE_note,
      IGR_note: req.body.IGR_note,
      GCC_note: req.body.GCC_note,
      MSCC_note: req.body.MSCC_note,
      complaint: req.body.complaint

   })
   res.status(201).json(student)

})
// PUT /api/students/:id (Private)
const updateStudent = asyncHandler(async (req, res) => {

   const student = await Students.findById(req.params.id)

   if (!student) {
      res.status(400)
      throw new Error("Dont Found Student")
   }

   const updateStudent = await Tickets.findByIdAndUpdate(req.params.id, req.body, {
      new: true
   })

   res.status(200).json(updateStudent)
})
// DELETE /api/students/:id (Private)
const deleteStudent = asyncHandler(async (req, res) => {
   const student = await Students.findById(req.params.id)

   if (!student) {
      res.status(400)
      throw new Error("Dont Found Student")
   }

   await student.remove()
   res.status(200).json({
      id: req.params.id,
      massage: "Student Removed"
   })
})


module.exports = {
   getStudents,
   getOneStudent,
   setStudent,
   updateStudent,
   deleteStudent
}