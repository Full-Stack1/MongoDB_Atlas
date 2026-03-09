const express= require("express"); // عرفتها مشان استخدم روت تبعها 
const { createNewItem, getallitem, getFileditems, getitembyid, getfiltersname,updateitem,deleteditem } = require("../controllers/items.controller");
const itemsRouters=express.Router();
itemsRouters.post("/create",createNewItem);
itemsRouters.get("/all",getallitem);
itemsRouters.get("/Filed",getFileditems);
itemsRouters.get("/filter",getfiltersname);
itemsRouters.get("/:itemid",getitembyid);
itemsRouters.put("/update",updateitem);
itemsRouters.delete("/delete",deleteditem);


module.exports=itemsRouters;