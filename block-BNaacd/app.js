// require
let express = require("express");
let logger = require("morgan");
let mongoosh = require("mongoose");

// mongoosh

async function connectMongoosh(){
    try{
        await mongoosh.connect("mongodb://localhost/collage")
        console.log("connected to mongoosh")
    }catch{
        console.error("error to the connecting mongoosh")
    }
}

connectMongoosh()

let app = express()

// middleware
app.use(logger("dev"))

// routes

app.get("/",(req,res)=>{
    res.send("welcome")
})



app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})