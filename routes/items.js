const express= require("express");
const{getAllitems, itemsfilter, updateprice}=require("../controllers/items");
const itemsRouters=express.Router();

itemsRouters.get("/",getAllitems);
itemsRouters.get("/filterprice",itemsfilter);
itemsRouters.put("/:id",updateprice);
module.exports=itemsRouters;