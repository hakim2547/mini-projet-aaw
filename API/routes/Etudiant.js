const express = require('express')
const router = express.Router()

// must the same in the controller 
const {getNote ,
    postComplaint,
} = require("../controllers/EtudiantControllers")


/* the meaning is : router.get('/',getTickey ) + router.post('/',setNote) */
router.route("/")
    .post(postComplaint)

    router.get('/:id',getNote)
    

module.exports = router


// put means Update 
