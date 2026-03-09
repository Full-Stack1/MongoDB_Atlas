const usermodel=require ("../models/UserSchema")
//usermodel.findone({name})   //هي لما ابحث عن حقل معين بستخدمها 
const getAllusers= (req,res)=>
{  
   usermodel.find({}).then((result)=>  //مشان لا تصير مشاكل حطيت داخل ال find {}
{
    res.status(200)
    res.json(result)
}).catch((err)=>{
    res.send(err)
})
}
//creat user
 const newuser=(req,res)=>
{
    const{Email,PassWord,Name,Age}= req.body;
    if(!Email )
    {
        return res.status(404).json({
            message:"not foud the email "
        })
    }
    //first way to create new user
    const user= new usermodel
    ({
         Email,
       PassWord,
       Name,
       Age,
    })
    user.save().then(()=>
    res.status(201).json({
       message:"New User Was add" 
    })).catch((err)=>{
        res.status(500).json({message:"Failed Another User has same Email"})
    })
}

//to call this fun any file
module.exports= 
{
   getAllusers,
   newuser,
}