const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    StudentName:{
        type:String
    },
    StudentClass:{
        type:String
    },
    StudentId:{
        type:String
    },
    StudentFathersName:{
        type:String
    },
    StudentMothersName:{
        type:String
    },
    StudentNationality:{
        type:String
    },
    CreateDate:{
        type: Date, default: Date.now
    }

}, {verssionKey: false});

const StudentListModel = mongoose.model('student', DataSchema);
module.exports = StudentListModel;
