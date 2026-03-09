const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/first_project(1)").then(()=>{
    console.log("Ready To Use Data base")
}).catch((err)=>
{
    console.log(err);
})
