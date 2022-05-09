const express = require('express')
const router = express.Router()

// must the same in the controller 
const {getTickey,
    setNote,
    updateNote,
    getComplaint,
} = require("../controllers/EnseignantControllers")


/* the meaning is : router.get('/',getTickey ) + router.post('/',setNote) */
router.route("/")
    .get(getComplaint)
    .post(setNote)

    router.put('/:id',updateNote) //update per id     

module.exports = router


// put means Update 
