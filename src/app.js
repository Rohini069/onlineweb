const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;

require ('C:\\Users\\Basappa\\Desktop\\Rohini\\FULL STACK INTERNSHIP\\WebAppT1\\src\\db\\conn.js');
app.use(express.json());
app.use(cors());

const Task = require('C:\\Users\\Basappa\\Desktop\\Rohini\\FULL STACK INTERNSHIP\\WebAppT1\\src\\models\\taskinfo.js');

app.get('/',async (req,res)=>{
    try{
        const gettask = await Task.find({});
        res.status(201).send(gettask);
    }
    catch(e){
            res.status(500).json({e:"Internal server error"});        
    }
});

app.post("/posttask", async (req, res) => {
    try {
      const insertData = await Task.create(req.body);
      console.log("Created Task Instance:", insertData);
      res.status(201).json({ message: "Task added successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error on post Task" });
    }
  });

  app.listen(port,()=>{
    console.log(`Server is istening to port ${port}`);
  })