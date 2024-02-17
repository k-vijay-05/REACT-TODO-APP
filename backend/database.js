const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://vijay:kvijay%401026354@cluster0.xwkkj0v.mongodb.net/todos")
const todoschema= mongoose.Schema({
    title: String,
    description:String,
    completed: Boolean,
})
const todo=mongoose.model('todos',todoschema);
module.exports={
    todo
}