const { default: mongoose } = require("mongoose");

const userschema = new mongoose.Schema
({
   Email: {type : String,required : true ,unique:true},
   PassWord:{type : String },
   Name: {type : String},
   Age:{type : Number }

})
module.exports=mongoose.model("User",userschema);