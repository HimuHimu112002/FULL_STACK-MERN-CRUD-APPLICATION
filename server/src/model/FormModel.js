const mongoose = require('mongoose');

const FormSchema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
   
}, {verssionKey: false});

const StudentForm = mongoose.model('form', FormSchema);
module.exports = StudentForm;
