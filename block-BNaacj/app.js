// require 

let express = require("express")
let mongoose = require("mongoose")
let logger = require("morgan")

let app = express()


// mongoose 

async function connectMongoose(){
    
    try{
        await mongoose.connect("mongodb://localhost/student")
        console.log("mongoose connected to the successfully")
    }catch{
        console.error("error  connecting  to the mongoose ")
    }

}


connectMongoose()


// middleware 
app.use(logger("dev"))

// routes
app.get("/",(req,res)=>{
    res.send("welcome")
})


app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})
