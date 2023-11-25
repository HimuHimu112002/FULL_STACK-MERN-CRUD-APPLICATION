const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    StudentId:{
        type:String
    },
    gender:{
        type:String
    },
    dateOfBirth:{
        type:String
    },
    address:{
        type:String
    },
    StudentNationality:{
        type:String
    },
    phone:{
        type:String
    },
    admissionDate:{
        type:String
    },
    courses:{
        type:String
    },
    CreateDate:{
        type: Date, default: Date.now
    }

}, {verssionKey: false});

const StudentListModel = mongoose.model('student', DataSchema);
module.exports = StudentListModel;
