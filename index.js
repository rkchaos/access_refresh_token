const express=require('express')
const app=express()
const dotenv=require("dotenv").config()
const mongoose=require("mongoose")
const cookieParser=require("cookie-parser")
const clientRouter=require("./routes/clinetRouter")
const helmet = require('helmet');


mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log("connected to database")
})
.catch((err)=>{
    console.log(err)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(clientRouter)


app.listen(process.env.PORT,()=>{
    console.log("server is running on port "+process.env.PORT)
})