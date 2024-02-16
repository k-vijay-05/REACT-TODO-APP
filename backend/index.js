const express=require("express");
const { createTodo, updatetodo } = require("./type");
const app=express();
app.port=3000;
app.use(express.json());
app.post("/todo",function(req,res){
    const userinput=req.body;
    const validateinput=createTodo.safeParse(userinput);
    if(!validateinput.success){
        res.status(411).json({
            msg: "you have sent wrong type of inputs ",
        })
        return;
    }

})
app.get("/todos",function(req,res){

})
app.put("/completed",function(req,res){\
    const userinput=req.body;
    const validateinput=updatetodo.safeParse(userinput);
    if(!validateinput.success){
        res.status(411).json({
            msg: "you have sent wrong type of inputs ",
        })
        return;
    }


})
app.listen(3000);