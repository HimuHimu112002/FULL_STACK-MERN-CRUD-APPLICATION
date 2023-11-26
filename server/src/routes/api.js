const express = require('express')
const router = express.Router()
const {getAllData,CreateStudent,UpdateStudent,DeleteStudent,createFunc} = require("../controllers/StudentListController")


router.post("/createStudent",CreateStudent)
router.post("/createFunc",createFunc)
router.get("/getData",getAllData)

router.post("/UpdateStudent/:id",UpdateStudent)
router.get("/DeleteStudent/:id",DeleteStudent)

module.exports = router