<<<<<<< HEAD
const express = require('express')
const router = express.Router()

const {
   getStudents,
   getOneStudent,
   setStudent,
   deleteStudent,
   updateStudent
} = require('../controllers/studentControllers')


router.route('/')
   .get(getStudents)
   .post(setStudent)

router.route('/:id')
   .get(getOneStudent)
   .put(updateStudent)
   .delete(deleteStudent)




=======
const express = require('express')
const router = express.Router()

const {
   getStudents,
   getOneStudent,
   setStudent,
   deleteStudent,
   updateStudent
} = require('../controllers/studentControllers')


router.route('/')
   .get(getStudents)
   .post(setStudent)

router.route('/:id')
   .get(getOneStudent)
   .put(updateStudent)
   .delete(deleteStudent)




>>>>>>> 049587edd300ea1853d310c2d71d5c7e886d2577
module.exports = router