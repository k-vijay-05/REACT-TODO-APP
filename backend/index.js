const express=require("express");
const { createTodo, updatetodo } = require("./type");
const { todo } = require("./database");
const app=express();
app.port=3000;
app.use(express.json());
app.post("/todo",async function(req,res){
    const userinput=req.body;
    const validateinput=createTodo.safeParse(userinput);
    if(!validateinput.success){
        res.status(411).json({
            msg: "you have sent wrong type of inputs ",
        })
        return;
    }
    await todo.create({
        title:userinput.title,
        description:userinput.description,
        completed:false
    })
    res.json({
        msg:"todo  created"
    })
    
})
app.get("/todos", async function(req,res){
    const todos=await todo.find({});
    res.json({
        todos
    })

})
app.put("/completed",async function(req,res){
    const userinput=req.body;
    const validateinput=updatetodo.safeParse(userinput);
    if(!validateinput.success){
        res.status(411).json({
            msg: "you have sent wrong type of inputs ",
        })
        return;
    }
    await todo.update({
     _id:req.body.id
    },{
        completed:true

    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(3000);