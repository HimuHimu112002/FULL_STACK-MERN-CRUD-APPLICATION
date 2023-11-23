const express = require('express')
const router = express.Router()
const {getAllData,CreateStudent,UpdateStudent,DeleteStudent} = require("../controllers/StudentListController")


router.post("/createStudent",CreateStudent)
router.get("/getData",getAllData)

router.post("/UpdateStudent/:id",UpdateStudent)
router.post("/DeleteStudent/:id",DeleteStudent)

module.exports = router