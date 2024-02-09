const express=require("express")
const userModel=require("../model/userModel")
const router=express.Router()
const bcrypt=require("bcryptjs")
const {match} =require ("asserts")


hashpasswordGenerator=async(pass)=>{    //encryption password
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}
router.post("/add",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
   // hashpasswordGenerator(password).then(
     //   (hashedpassword)=>{
       //     console.log(hashedpassword)
         //   data.password=hashedpassword
           // console.log(data)
    // let blog=new userModel(data)
     //let result=blog.save()
     //res.json(
       //  {
         //    status:"success"
         //}
    // )

      //  }
    //)
     const hashedpassword=await hashpasswordGenerator(password)
     data.password=hashedpassword
     let blog=new userModel(data)
     let result=await blog.save()
     res.json(
         {
             status:"success"
         }
     )

        }
    )

   
router.post("/signin",async(req,res)=>{
  let input=req.body
  let email=req.body.email
    let data=await userModel.findOne({"email":email})
    if(!data)
    {
        res.json(
            {
                status:"invalid user"
            }
        )
       
    }
    console.log(data)
    let dbpassword=data.password
    let inputpassword=req.body.password
    console.log(dbpassword)
    console.log(inputpassword)
    const match=await bcrypt.compare(dbpassword,inputpassword)
    if(!match)
    {
        return res.json(
            {
                status:"invalid password"
            }
        )
    }
    res.json(
      {
           status:"success"
        }
    )
    
})

     

module.exports=router