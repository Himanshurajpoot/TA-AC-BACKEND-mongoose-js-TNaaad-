
// require
let express = require("express")
let logger = require("morgan")
let mongoose = require("mongoose")


// mongoose connecting
async function connectMongoose(){
    try{
        await mongoose.connect("mongodb://localhost/student")
        console.log("mongoose connected to the successfully")
    }catch{
        console.error("error  connecting  to the mongoose ")
    }
}

connectMongoose()

let app = express()

// middleware
app.use(logger("dev"))

// routes
app.get("/",(req,res)=>{
    res.send("welcome")
})
app.listen(3000,()=>{
    console.log("server is lishening on port 3000")
})