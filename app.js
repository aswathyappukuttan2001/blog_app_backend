const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRouter=require("./controller/userRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://AswathyAppukuttan:aswathy2001@cluster0.9azl2ct.mongodb.net/blogDb?retryWrites=true&w=majority",
{
  useNewUrlParser:true
}
)

app.use("/api/blog",userRouter)

app.listen(3001,()=>
{
    console.log("server running")
})