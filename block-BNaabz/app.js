// require
let express = require("express")
let logger = require("morgan")
let mongoose = require("mongoose")

// mongosh



async function conectMongoosh() {
    try{
        await mongoose.connect("mongodb://localhost/mountains");
        console.log("Connected to the database");
    }catch{
        console.error("Error connecting to the database:", err);
    }
    
  
}
conectMongoosh()
let app = express()

// middileware
app.use(logger("dev"))


// routes
app.get("/",(req, res)=>{
    res.send("welcome")
})

app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})