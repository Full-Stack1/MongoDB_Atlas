const { default: mongoose } = require("mongoose");
const itemschema= new mongoose.Schema
({ 
     name : {type: String , require : true , unique : true},
     image :{type : String},
     category : {type : String , required: true , enum:["elect","clothing","healthy"]}
})
module.exports =mongoose.model("Item",itemschema);