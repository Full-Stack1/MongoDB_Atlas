const express= require("express");
const { getAllusers, getFilter, creatuser, newuser } = require("../controllers/user.controller");
const usersRouter= express.Router();
usersRouter.get("/",getAllusers);
usersRouter.post("/create",newuser);

module.exports=usersRouter;