const express=require("express")
const userModel=require("../model/userModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let blog=new userModel(data)
    let result=await blog.save()
    res.json(
        {
            status:"success"
        }
    )
})

   

module.exports=router