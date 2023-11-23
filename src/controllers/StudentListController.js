const StudentListModel = require('../model/StudentListModel')


// create student list
async function CreateStudent(req, res){
    let {StudentName,StudentClass,StudentId,StudentFathersName,StudentMothersName,StudentNationality,
    } = req.body;
    
    let student = new StudentListModel({
        StudentName,
        StudentClass,
        StudentId,
        StudentFathersName,
        StudentMothersName,
        StudentNationality,
    })   
    student.save()
    res.send({success: "student Created Successfully"})

}


// Read student list
async function getAllData(req, res){
    try {

      let data = await StudentListModel.findAll({})
      res.status(200).json({ status: "Successfully you get all data", data: data});
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }
};


// Update student list
async function UpdateStudent(req, res){
    let id = req.params.id;
    let Query = {_id:id};
    try {

        let reqBody = req.body;
        let data = await StudentListModel.updateOne({_id: Query}, {$set: reqBody}, {upsert: true});
        res.status(200).json({ status: "Student Data Update Success", data: data });
    } catch (e) {
        res.status(200).json({ status: "error", error: e.toString() });
    }
}


// delete student list
async function DeleteStudent(req, res){
    let id = req.params.id;
    try {
        let data = await StudentListModel.deleteOne({_id: id});
        res.status(200).json({ status: "Student Delete Success", data: data });
    } catch (e) {
        res.status(200).json({ status: "error", error: e.toString() });
    }
}
module.exports = {CreateStudent,getAllData,UpdateStudent,DeleteStudent}