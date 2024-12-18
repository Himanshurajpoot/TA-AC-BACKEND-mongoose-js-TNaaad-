
// require
let express = require("express")
let mongoose = require("mongoose")
let logger = require("morgan")


let app = express()

// connect moogose 


async function connectMongoosh(){
  
    try{
        await mongoose.connect("mongodb://localhost/mountains")
          console.log("Connected to the database")
        

    }catch{
        console.log("error connecting to the database")
    }

}

connectMongoosh()

// middleware
app.use(logger("dev"))



// routes
app.get("/",(req,res)=>{
    res.send("welcome")
})

app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})