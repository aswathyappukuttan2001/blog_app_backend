const express=require("express")
const userModel=require("../model/userModel")
const router=express.Router()
const bcrypt=require("bcryptjs")


hashpasswordGenerator=async(pass)=>{    //encryption password
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}
router.post("/add",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    hashpasswordGenerator(password).then(
        (hashedpassword)=>{
            console.log(hashedpassword)
            data.password=hashedpassword
            console.log(data)
     let blog=new userModel(data)
     let result=blog.save()
     res.json(
         {
             status:"success"
         }
     )
        }
    )
     
    //console.log(data)


})

   

module.exports=router