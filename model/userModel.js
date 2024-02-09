const mongoose=require("mongoose")

const blogschema=new mongoose.Schema(
    {
    
    name: String,
    age:String,
    mobileno: String,
    Address: String,
    pincode: String,
    email:String,
    password:String
    
    }
)
module.exports=mongoose.model("blog",blogschema)