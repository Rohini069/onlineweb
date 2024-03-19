const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    courseid:{
        type:String,
        required:true
    },
    taskName:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    },
    AdditionalDetails:{
        type:String
    }

});

const Task = mongoose.model("Task",taskSchema);


module.exports = Task;