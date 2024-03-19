const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/student_taskss")
  .then(() => console.log("Database connected successfully"))
  .catch((e) => console.log("Database not connected"));